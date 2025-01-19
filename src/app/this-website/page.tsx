import React from "react";
import { CodeBlock } from "@/components/ui/code-block";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { infrastructureCode, contactFormCode, parallaxCode } from "@/data/code";
import { Badge } from "@/components/ui/badge";


const TechBadge = ({ children }: { children: React.ReactNode }) => (
  <Badge variant="secondary" className="text-sm">{children}</Badge>
);

const ThisWebsitePage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-8 px-4">
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
            <TechBadge>Framer Motion</TechBadge>
            <TechBadge>AWS Lambda</TechBadge>
            <TechBadge>API Gateway</TechBadge>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Technical Overview</h2>
        <p className="text-muted-foreground">
          The website combines server-side rendering with Next.js, modern React patterns, and a serverless backend 
          architecture. The site features smooth animations and parallax effects using Framer Motion.
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
          <CardTitle>Parallax Scroll Implementation</CardTitle>
          <CardDescription className="space-y-2">
            <p>
              The website features a dynamic parallax scrolling section built with Framer Motion and React. 
              This implementation showcases smooth animations and responsive design patterns.
            </p>
            <p>
              Key features:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Scroll-based animations using Framer Motion's useScroll hook</li>
              <li>Dynamic content rendering with smooth transitions</li>
              <li>Responsive media display supporting both images and videos</li>
              <li>Progress indicators and section markers</li>
              <li>Custom MediaDisplay component for handling different media types</li>
            </ul>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock
            language="tsx"
            filename="ParallaxAbout.tsx"
            highlightLines={[5, 22, 42, 89]}
            code={parallaxCode}
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
            <h3 className="font-semibold mb-2">Animation Design</h3>
            <p className="text-sm text-muted-foreground">
              Animations are built using Framer Motion, providing smooth transitions and interactive elements.
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