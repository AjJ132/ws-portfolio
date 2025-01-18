

  // Infrastructure code showing AWS setup with Terraform
  export const infrastructureCode = `# Create Lambda function
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
      ALLOWED_ORIGINS = "http://localhost:3000,https://aj-johnson.com"
    }
  }
}

# API Gateway
resource "aws_apigatewayv2_api" "api" {
  name          = "aj-portfolio-api"
  protocol_type = "HTTP"
  
  cors_configuration {
    allow_origins = ["http://localhost:3000", "https://aj-johnson.com"]
    allow_methods = ["POST", "OPTIONS"]
    allow_headers = ["content-type"]
    max_age      = 300
  }
}`;

  // Contact form React component code
  export const contactFormCode = `export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) throw new Error('Failed to send');
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };`;

  // Projects component code
  export const projectsCode = `interface ProjectCardProps {
  project: Project;
  variant: 'detailed' | 'resume';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, variant }) => {
  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {project.images && (
          <div className="md:w-1/3">
            <Carousel className="w-full">
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={image}
                      alt={\`\${project.title} - Image \${index + 1}\`}
                      className="object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        )}
        <div className="md:w-2/3">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-muted-foreground">{project.description}</p>
        </div>
      </div>
    </Card>
  );
};`;