
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';

const ResumeProjects: React.FC = () => {
  return (
    <section className="space-y-6">
      
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="flex justify-between items-start">
              <h3 className="font-semibold">{project.title}</h3>
              <span className="text-sm text-muted-foreground">
                {project.date.start} – {project.date.end}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ResumeProjects;