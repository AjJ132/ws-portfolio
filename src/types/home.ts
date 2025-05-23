export interface BaseMedia {
  src: string;
  alt: string;
}

export interface ImageMedia extends BaseMedia {
  type: 'image';
}

export interface VideoMedia extends BaseMedia {
  type: 'video';
}

export type Media = ImageMedia | VideoMedia;

export interface ContentItem {
  title: string;
  learnMoreLink: string;
  description: string;
  media: Media[];
}


export const homePageContent: ContentItem[] = [
  {
    title: "Student Athlete",
    learnMoreLink: "/about",
    description:
      "Division 1 Men's Track and Field athlete at Kennesaw State University since Fall 2021. Balancing the demands of collegiate athletics with academic excellence, completing my B.S. in Software Engineering (2024) and pursuing an M.S. in Software Engineering (2024-2026). Demonstrating leadership through athletics while maintaining technical excellence in software development.",
    media: [
      {
        src: "/pv-4.webp",
        alt: "Track and Field Headshot",
        type: "image"
      },
    ]
  },
  {
    title: "SAAC President",
    learnMoreLink: "/about",
    description:
      "Serving as the Student-Athlete Advisory Committee President (2023-2025), representing athlete interests across both ASUN and CUSA conferences. Member of the Provost's Athletics Oversight Council and recipient of the 2024 Spring Outstanding Student Award. Leading initiatives to enhance student-athlete experience while developing enterprise software solutions.",
    media: [
      {
        src: "/saac_1.webp",
        alt: "SAAC meeting",
        type: "image"
      },
    ]
  },
  {
    title: "Full Stack Development",
    learnMoreLink: "/projects",
    description:
      "Experienced in modern full-stack development using React, Next.js, TypeScript, and .NET. Created enterprise solutions at Haering Precision, including a comprehensive CMMS platform and LMS system. Proficient in both frontend technologies (React, HTML, CSS) and backend systems (C#, PostgreSQL, MongoDB), with expertise in CI/CD pipelines and cloud services.",
      media: [
        {
          src: "/players.png",
          alt: "Football Analytics Application",
          type: "image"
        },
      ]
  },
];