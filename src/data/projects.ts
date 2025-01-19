import { Project } from "@/types/projects";


export const projects: Project[] = [
    {
      id: 1,
      title: 'Hughes Residential',
      description: 'Real Estate Website for Hughes Residential',
      longDescription: 'A website for Hughes Residential, an upcoming real estate company based in Greenville, SC. The website showcases the company\'s properties, services, and contact information. The site is built with Next.js and Tailwind CSS, and is hosted on Vercel. This site also features a Sanity CMS integration for easy content management.',
      technologies: [
        'Next.js',
        'Tailwind CSS',
        'Sanity CMS',
        'Vercel',
        'Responsive Design',
        'SEO Optimization',
       
      ],
      date: {
        start: 'Dec 2024',
        end: 'Present'
      },
      images: [
        '/hughes-residential.png',
      ],
      demoUrl: 'hughes-residential.com',
      
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
    },
    {
      id: 3,
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
        '/stride-sync-website.png',
      ],
      demoUrl: 'https://apps.apple.com/us/app/stride-sync/id6482576370',
      
      type: 'featured'
    },
    {
      id: 4,
      title: 'Personal Portfolio',
      description: 'Modern portfolio website built with Next.js and AWS',
      longDescription: 'A modern, responsive portfolio website built with Next.js 14 and deployed on AWS. Features include dynamic parallax scrolling animations using Framer Motion, a serverless contact form implementation with AWS Lambda and API Gateway, and infrastructure as code using Terraform. The site showcases modern web development practices including TypeScript for type safety and Tailwind CSS for styling.',
      technologies: [
        'Next.js 14',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'AWS Lambda',
        'API Gateway',
        'Terraform',
        'AWS Amplify'
      ],
      date: {
        start: 'Jan 2025',
        end: 'Present'
      },
      images: [
        '/portfolio.png'  
      ],
      githubUrl: 'https://github.com/AjJ132/ws-portfolio', 
      type: 'featured'
    }
  ];
  