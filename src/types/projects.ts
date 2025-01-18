// Basic project interface that both types will extend
// export interface BaseProject {
//     id: number | string;
//     title: string;
//     description: string;
//     technologies: string[];
// }

// // Interface for detailed projects (used in ProjectList)
// export interface DetailedProject extends BaseProject {
//     images: string[];
//     demoUrl: string;
//     githubUrl: string;
// }

// // Interface for resume projects
// export interface ResumeProject extends BaseProject {
//     date: {
//         start: string;
//         end: string;
//     };
// }

// // Type guard to check if a project is a DetailedProject
// export function isDetailedProject(project: BaseProject): project is DetailedProject {
//     return 'images' in project && 'demoUrl' in project && 'githubUrl' in project;
// }

// // Type guard to check if a project is a ResumeProject
// export function isResumeProject(project: BaseProject): project is ResumeProject {
//     return 'date' in project;
// }

export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    date: {
      start: string;
      end: string;
    };
    images?: string[];
    demoUrl?: string;
    githubUrl?: string;
    type: 'featured' | 'resume'; // To differentiate between detailed and resume views
  }