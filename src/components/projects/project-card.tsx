'use client'

import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Project } from '@/types/projects';

interface ProjectCardProps {
    project: Project;
    variant: 'detailed' | 'resume';
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ project, variant }) => {
    if (variant === 'resume') {
      return (
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold">{project.title}</h3>
            <span className="text-sm text-muted-foreground">
              {project.date.start} – {project.date.end}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      );
    }
  
    return (
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {project.images && (
            <div className="md:w-1/3">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="object-cover object-center hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          )}
  
          <div className="md:w-2/3 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.longDescription || project.description}
                </p>
              </div>
  
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
  
            {(project.demoUrl || project.githubUrl) && (
              <div className="flex items-center gap-4 mt-6">
                {project.demoUrl && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-sm"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    );
  };
  

  export default ProjectCard;