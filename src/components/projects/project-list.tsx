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

const projects = [
  {
    id: 1,
    title: 'Intelligent Recruiting',
    description: 'Multi Part Project to enhance football recruiting at the college level. Project includes large scale web scraping in python and a full stack Next.js web application.',
    images: [
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400'
    ],
    demoUrl: 'https://dashboard-demo.com',
    githubUrl: 'https://github.com/yourusername/dashboard',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'PostgreSQL', 'Python', 'BeautifulSoup', 'Docker', 'Terrform'],
  },
];

const ProjectList: React.FC = () => {
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <Card key={project.id} className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Project Images Carousel */}
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

            {/* Project Info */}
            <div className="md:w-2/3 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
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

              <div className="flex items-center gap-4 mt-6">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-sm"
                  onClick={() => window.open(project.demoUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-sm"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Source Code
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default ProjectList;