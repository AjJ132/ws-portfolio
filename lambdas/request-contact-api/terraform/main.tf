# NPM install step
resource "null_resource" "npm_install" {
  triggers = {
    package_json = filemd5("${path.module}/../lambda/package.json")
    index_js    = filemd5("${path.module}/../lambda/index.js")
  }

  provisioner "local-exec" {
    command = "cd ${path.module}/../lambda && npm install"
  }
}

# Archive the Lambda function code
data "archive_file" "lambda_zip" {
  type        = "zip"
  source_dir  = "${path.module}/../lambda"
  output_path = "${path.module}/lambda.zip"
  depends_on  = [null_resource.npm_install]
}

# IAM role for Lambda
resource "aws_iam_role" "lambda_role" {
  name = "aj_portfolio_contact_form_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

# Basic Lambda execution policy
resource "aws_iam_role_policy_attachment" "lambda_basic" {
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
  role       = aws_iam_role.lambda_role.name
}

# Add SES permissions to Lambda role
resource "aws_iam_role_policy" "lambda_ses" {
  name = "aj_portfolio_ses_policy"
  role = aws_iam_role.lambda_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "ses:SendEmail",
          "ses:SendRawEmail"
        ]
        Resource = "*"
      }
    ]
  })
}

# Create Lambda function
resource "aws_lambda_function" "contact_form" {
  filename         = data.archive_file.lambda_zip.output_path
  function_name    = "aj-portfolio-contact-form"
  role            = aws_iam_role.lambda_role.arn
  handler         = "index.handler"
  source_code_hash = data.archive_file.lambda_zip.output_base64sha256
  runtime         = "nodejs18.x"
  
  timeout     = 10
  memory_size = 256

  environment {
    variables = {
      ALLOWED_ORIGINS = "http://localhost:3000,https://aj-johnson.com,https://www.aj-johnson.com"
    }
  }

  tags = {
    Environment = "production"
    Project     = "portfolio"
    ManagedBy   = "terraform"
  }
}

# API Gateway
resource "aws_apigatewayv2_api" "api" {
  name          = "aj-portfolio-api"
  protocol_type = "HTTP"
  
  cors_configuration {
    allow_origins = ["http://localhost:3000", "https://aj-johnson.com", "https://www.aj-johnson.com"]
    allow_methods = ["POST", "OPTIONS"]
    allow_headers = ["content-type"]
    max_age      = 300
  }

  tags = {
    Environment = "production"
    Project     = "portfolio"
    ManagedBy   = "terraform"
  }
}

# CloudWatch log group for API Gateway
resource "aws_cloudwatch_log_group" "api_logs" {
  name              = "/aws/apigateway/${aws_apigatewayv2_api.api.name}"
  retention_in_days = 30

  tags = {
    Environment = "production"
    Project     = "portfolio"
    ManagedBy   = "terraform"
  }
}

# API Gateway stage
resource "aws_apigatewayv2_stage" "default" {
  api_id      = aws_apigatewayv2_api.api.id
  name        = "$default"
  auto_deploy = true

  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.api_logs.arn
    format = jsonencode({
      requestId      = "$context.requestId"
      ip            = "$context.identity.sourceIp"
      requestTime   = "$context.requestTime"
      httpMethod    = "$context.httpMethod"
      routeKey      = "$context.routeKey"
      status        = "$context.status"
      protocol      = "$context.protocol"
      responseLength = "$context.responseLength"
      errorMessage  = "$context.error.message"
    })
  }

  tags = {
    Environment = "production"
    Project     = "portfolio"
    ManagedBy   = "terraform"
  }
}

# API Gateway integration with Lambda
resource "aws_apigatewayv2_integration" "lambda" {
  api_id                 = aws_apigatewayv2_api.api.id
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.contact_form.invoke_arn
  integration_method     = "POST"
  payload_format_version = "2.0"
}

# API Gateway route
resource "aws_apigatewayv2_route" "contact" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "POST /contact"
  target    = "integrations/${aws_apigatewayv2_integration.lambda.id}"
}

# Lambda permission for API Gateway
resource "aws_lambda_permission" "apigw" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.contact_form.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.api.execution_arn}/*/*/contact"
}

# SES email verification
resource "aws_ses_email_identity" "email" {
  email = "aj132@icloud.com"
}

# Outputs
output "api_endpoint" {
  value = "${aws_apigatewayv2_api.api.api_endpoint}/contact"
  description = "API Gateway endpoint URL for contact form"
}

output "lambda_function_name" {
  value       = aws_lambda_function.contact_form.function_name
  description = "Name of the Lambda function"
}

output "api_gateway_name" {
  value       = aws_apigatewayv2_api.api.name
  description = "Name of the API Gateway"
}