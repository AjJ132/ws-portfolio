import { Project } from "@/types/projects";


export const projects: Project[] = [
    {
      id: 1,
      title: 'Stride Sync',
      description: 'Unified Track & Field Meet Data Platform',
      longDescription: 'An iOS application that aggregates and centralizes track and field meet data from multiple sources across the United States. The app consolidates information from college, high school, and various other track meets into a single, user-friendly platform.',
      technologies: [
        'Swift',
        'Python',
        'MongoDB',
        'AWS Lambda',
        'iOS Development',
        'Web Scraping',
        'REST APIs',
        'SwiftUI'
      ],
      date: {
        start: 'Apr 2024',
        end: 'Present'
      },
      images: [
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
        'https://placehold.co/600x400'
      ],
      demoUrl: 'https://apps.apple.com/us/app/stride-sync/id6482576370',
      
      type: 'featured'
    },
    {
      id: 2,
      title: 'Prism',
      description: 'Intelligent College Football Analytics Platform',
      longDescription: 'A comprehensive web application that leverages web scraping and machine learning to analyze college football players. The platform collects player statistics, performs predictive analysis for passing and rushing yards, and provides detailed insights across different teams.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Terraform',
        'AWS Lambda',
        'Beautiful Soup',
        'Docker',
        'Machine Learning',
        'Python',
        'Web Scraping',
        'PostgreSQL'
      ],
      date: {
        start: 'Nov 2024',
        end: 'Present'
      },
      images: [
        '/players.png',
        '/roster.png'
      ],
      
      
      type: 'featured'
    }
  ];
  