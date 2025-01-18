terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-east-1"  # Change this to your desired region
}

# Create the Amplify app
resource "aws_amplify_app" "nextjs_app" {
  name         = "aj-johnson-portfolio"
  repository   = "https://github.com/AjJ132/ws-portfolio"  # Replace with your repository URL
  
  # Configure build settings for Next.js
  build_spec = <<-EOT
    version: 1
    frontend:
      phases:
        preBuild:
          commands:
            - npm ci
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: .next
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
          - .next/cache/**/*
  EOT

  # Enable auto branch creation
  enable_auto_branch_creation = true
  enable_branch_auto_build   = true

  # Configure environment variables if needed
  environment_variables = {
    NODE_ENV = "production"
  }

  # Custom rules for Next.js routing
  custom_rule {
    source = "/<*>"
    status = "404"
    target = "/404.html"
  }

  custom_rule {
    source = "/_next/*"
    status = "200"
    target = "/_next/*"
  }

  custom_rule {
    source = "/*"
    status = "200"
    target = "/index.html"
  }
}

# Create and connect a branch (e.g., main)
resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.nextjs_app.id
  branch_name = "main"
  
  framework = "Next.js - SSR"
  stage     = "PRODUCTION"

  environment_variables = {
    AMPLIFY_MONOREPO_APP_ROOT = "/"
  }
}

