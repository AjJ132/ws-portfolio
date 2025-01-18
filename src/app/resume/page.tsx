import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mail, MapPin, Phone } from 'lucide-react';
import ResumeProjects from '@/components/projects/resume-projects';

const ResumePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background p-8 max-w-5xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Alan &quot;AJ&quot; Johnson</h1>
        <div className="flex flex-wrap gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>(706) 436-1212</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Kennesaw, GA</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>aj132@icloud.com</span>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-primary">Full-Stack Software Engineer</h2>
      </div>

      {/* Technical Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Skills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['C#', 'HTML', 'CSS', 'Java', 'SQL', 'GO', 'Swift', 'JavaScript', 'Python', 'TypeScript'].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Technology</h3>
            <div className="flex flex-wrap gap-2">
              {['Kubernetes', 'Docker', '.NET', 'Git', 'Azure', 'SwiftUI', 'PostgreSQL', 'MongoDB', 'NGINX', 'React', 'Next.js'].map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Concepts</h3>
            <div className="flex flex-wrap gap-2">
              {['CI/CD', 'Asynchronous Programming', 'Agile', 'Data Structures', 'RESTful APIs', 'Machine Learning'].map((concept) => (
                <Badge key={concept} variant="secondary">{concept}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">Kennesaw State Athletics</h3>
                <p className="text-muted-foreground">Software Engineer Intern</p>
              </div>
              <span className="text-muted-foreground">May–Aug 2024</span>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>Created a collaborative feedback machine learning model to recommend products to sports fans based on their similarity with other fans in the database.</li>
                <li>Developed a Python-based vector embedding system to identify customers&apos; nearest neighbors based on specific sports activities.</li>
              <li>Designed and implemented a Python-based data hygiene and feature engineering pipeline using Docker.</li>
              <li>Led the development of a Next.js React application to display predictive analytics and other crucial ticket sales information.</li>
              <li>Developed a Tableau-based dashboard to perform predictive analytics on incoming sports ticket transactions.</li>
              <li>Conducted bi-weekly presentations to Kennesaw State&apos;s Athletic Director, providing progress updates and receiving feedback.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">Haering Precision USA LP</h3>
                <p className="text-muted-foreground">Full-Stack Software Developer Intern</p>
              </div>
              <span className="text-muted-foreground">Jun–Aug 2022-2023</span>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>Led the development and deployment of Hearing Computerized Machine Maintenance System (CMMS).</li>
              <li>Conducted weekly strategy meetings with plant managers to identify and implement improvements.</li>
              <li>Architected and implemented a robust CI/CD pipeline featuring unit tests and automated deployments.</li>
              <li>Optimized PostgreSQL and MSSQL database performance through index tuning and complex table relationships.</li>
              <li>Successfully maintained and updated Hearing Learning Management System (LMS).</li>
              <li>Developed a WinForm application to real-time track machine statuses and part outputs.</li>
              <li>Created extensive documentation and software tutorials for engineers and electricians.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Projects */}
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ResumeProjects />
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">B.S. Software Engineering</h3>
                <p className="text-muted-foreground">Kennesaw State University</p>
              </div>
              <span className="text-muted-foreground">Aug 2021 – May 2024</span>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">M.S. Software Engineering</h3>
                <p className="text-muted-foreground">Kennesaw State University</p>
              </div>
              <span className="text-muted-foreground">Aug 2024 – May 2026</span>
            </div>
          </div>

          <div className="space-y-2 mt-4">
            <h3 className="font-semibold">Activities & Leadership</h3>
            <ul className="list-disc pl-6 space-y-1">
                <li>Division 1 Men&apos;s Track and Field Team (Aug 2021 – Current)</li>
                <li>Provost&apos;s Athletics Oversight Council (Jan 2023 – Current)</li>
              <li>Student Athlete Advisory Committee Member (Aug 2022 – Current)</li>
              <li>Student Athlete Advisory Committee President (Sep 2023 - Current)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumePage;