

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

export const parallaxCode = `import React from "react";
import { CodeBlock } from "@/components/ui/code-block";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { infrastructureCode, contactFormCode } from "@/data/code";
import { Badge } from "@/components/ui/badge";
import ParallaxAbout from "@/components/ParallaxAbout";

const TechBadge = ({ children }: { children: React.ReactNode }) => (
  <Badge variant="secondary" className="text-sm">{children}</Badge>
);

const ThisWebsitePage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8 px-4">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">About This Website</h1>
        <div className="space-y-4">
          <p className="text-xl text-muted-foreground">
            This portfolio is built with modern web technologies and cloud infrastructure. Here's a technical deep dive into how it works.
          </p>
          <div className="flex flex-wrap gap-2">
            <TechBadge>Next.js 14</TechBadge>
            <TechBadge>React</TechBadge>
            <TechBadge>TypeScript</TechBadge>
            <TechBadge>Tailwind CSS</TechBadge>
            <TechBadge>AWS Lambda</TechBadge>
            <TechBadge>API Gateway</TechBadge>
            <TechBadge>Terraform</TechBadge>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Technical Overview</h2>
        <p className="text-muted-foreground">
          The website combines server-side rendering with Next.js, modern React patterns, and a serverless backend 
          architecture. Some of the projects infrastructure is managed through code using Terraform, ensuring reproducibility and 
          maintainability.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Infrastructure as Code</CardTitle>
          <CardDescription className="space-y-2">
            <p>
              Some of backend infrastructure is fully automated using Terraform. Currently the contact form API is deployed using
              teraform. 
            </p>
            <p>
              Key features:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Automated deployment process</li>
              <li>CORS configuration for security</li>
              <li>CloudWatch integration for monitoring</li>
              <li>IAM roles and permissions management</li>
            </ul>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock
            language="hcl"
            filename="main.tf"
            highlightLines={[2, 8, 15, 24]}
            code={infrastructureCode}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Form Implementation</CardTitle>
          <CardDescription className="space-y-2">
            <p>
              The contact form is built with React and TypeScript, featuring real-time validation and 
              error handling. It communicates with AWS Lambda through API Gateway to process submissions.
            </p>
            <p>
              Features:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Form validation with error messages</li>
              <li>Loading states and success feedback</li>
              <li>Error boundary implementation</li>
              <li>Accessibility considerations</li>
            </ul>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock
            language="tsx"
            filename="contact-form.tsx"
            highlightLines={[8, 13, 17, 22]}
            code={contactFormCode}
          />
        </CardContent>
      </Card>

      {/* Replaced Projects Card with ParallaxAbout component */}
      <div className="w-full">
        <ParallaxAbout />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Development Practices</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Type Safety</h3>
            <p className="text-sm text-muted-foreground">
              TypeScript is used throughout the codebase to ensure type safety and improve development experience.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Component Design</h3>
            <p className="text-sm text-muted-foreground">
              Components are built following atomic design principles, ensuring reusability and maintainability.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Deployment</h3>
            <p className="text-sm text-muted-foreground">
              The website is deployed using AWS Amplify with automatic deployments triggered by GitHub commits.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ThisWebsitePage;
`;