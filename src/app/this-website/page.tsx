import React from "react";
import { CodeBlock } from "@/components/ui/code-block";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { infrastructureCode, contactFormCode, projectsCode} from "@/data/code";
import { Badge } from "@/components/ui/badge";

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
            This portfolio is built with modern web technologies and cloud infrastructure. Here&apos;s a technical deep dive into how it works.
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
          architecture. All infrastructure is managed through code using Terraform, ensuring reproducibility and 
          maintainability.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Infrastructure as Code</CardTitle>
          <CardDescription className="space-y-2">
            <p>
              The backend infrastructure is fully automated using Terraform. This includes setting up AWS Lambda 
              for serverless compute, API Gateway for RESTful endpoints, and SES for email handling.
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

      <Card>
        <CardHeader>
          <CardTitle>Projects Showcase</CardTitle>
          <CardDescription className="space-y-2">
            <p>
              The projects section uses a responsive grid layout with dynamic card components. Each project 
              card features an image carousel, detailed descriptions, and links to live demos and source code.
            </p>
            <p>
              Implementation highlights:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Responsive image carousels</li>
              <li>Conditional rendering based on project type</li>
              <li>Animated transitions</li>
              <li>Flexible card layouts</li>
            </ul>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock
            language="tsx"
            filename="project-card.tsx"
            highlightLines={[1, 7, 15, 28]}
            code={projectsCode}
          />
        </CardContent>
      </Card>

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