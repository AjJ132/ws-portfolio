// app/projects/[id]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from '@/data/projects';

interface PageProps {
  params: {
    id: string;
  };
}

const ProjectPage: React.FC<PageProps> = ({ params }) => {
  const project = projects.find((p) => p.id === Number(params.id));

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="p-6 max-w-7xl mx-auto space-y-6">
        {/* Navigation */}
        <Link href="/projects">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        {/* Project Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
            <div className="flex gap-3">
              {project.demoUrl && (
                <Button asChild>
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{project.date.start} – {project.date.end}</span>
          </div>
        </div>

        {/* Project Images */}
        {project.images && project.images.length > 0 && (
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video w-full overflow-hidden rounded-lg">
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>
        )}

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {project.longDescription || project.description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Technology Stack</CardTitle>
                <CardDescription>Tools and technologies used in this project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;