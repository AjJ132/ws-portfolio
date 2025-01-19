import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects } from "@/data/projects";
import Image from 'next/image';

const FeaturedTeaser = () => {
  const featuredProjects = projects.filter(p => p.type === 'featured');

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Latest Work</h2>
            <p className="text-muted-foreground mt-2">
              Building the future, one project at a time
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {featuredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
                {project.images && project.images[0] && (
                  <div className="ml-4 h-16 w-16 overflow-hidden rounded-md">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs text-muted-foreground">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/projects" passHref>
            <Button className="group" variant="outline">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTeaser;