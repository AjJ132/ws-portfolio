import { projects } from "@/data/projects";
import ProjectCard from "./project-card";

interface ProjectListProps {
  variant?: 'detailed' | 'resume';
  filter?: 'featured' | 'all';
}

const ProjectList: React.FC<ProjectListProps> = ({ 
  variant = 'detailed',
  filter = 'all'
}) => {
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.type === 'featured');

  return (
    <div className="space-y-6">
      {variant === 'resume' && <h2 className="text-xl font-semibold">Projects</h2>}
      <div className="space-y-6">
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;