

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