'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowUpRight, Plus, MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { projects } from '@/data/projects';

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-6 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
          <p className="text-lg text-muted-foreground">
            A collection of my recent work and experiments
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group relative overflow-hidden border bg-card transition-all hover:shadow-lg">
              {/* Project Preview */}
              <div className="aspect-video w-full overflow-hidden bg-muted">
                {project.images && project.images[0] && (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-semibold tracking-tight">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                </div>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-2 py-0.5">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="px-2 py-0.5">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Clickable Overlay */}
              
              <a
                href={'/projects/' + project.id}
                className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 bg-background/5 transition-opacity"
              >
                <span className="absolute right-4 top-4">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;