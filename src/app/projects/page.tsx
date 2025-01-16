import ProjectList from '@/components/projects/project-list';
export default function ProjectsPage() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
            <p className="text-sm text-muted-foreground">
              A collection of my recent work and experiments
            </p>
          </div>
        </div>
          <ProjectList />
      </div>
    </div>
  );
}