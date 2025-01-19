import { ContentItem } from "@/types/home";
import { StickyScroll } from "../ui/sticky-scroll-reveal";


const content: ContentItem[] = [
  {
    title: "Student Athlete",
    description:
      "Division 1 Men's Track and Field athlete at Kennesaw State University since Fall 2021. Balancing the demands of collegiate athletics with academic excellence, completing my B.S. in Software Engineering (2024) and pursuing an M.S. in Software Engineering (2024-2026). Demonstrating leadership through athletics while maintaining technical excellence in software development.",
      media: [
      {
        src: "/track-1.jpeg",
        alt: "Track and Field Headshot",
        type: "image"
      },
      {
        src: "/pv-2.jpg",
        alt: "Mid-air pole vault",
        type: "image"
      },
      {
        src: "/pv.mp4",
        alt: "Pole vault attempt",
        type: "video"
      }
    ]
  },
  {
    title: "SAAC President",
    description:
      "Serving as the Student-Athlete Advisory Committee President (2023-2025), representing athlete interests across both ASUN and CUSA conferences. Member of the Provost's Athletics Oversight Council and recipient of the 2024 Spring Outstanding Student Award. Leading initiatives to enhance student-athlete experience while developing enterprise software solutions.",
      media: [
      {
        src: "/saac_1.jpg",
        alt: "SAAC meeting",
        type: "image"
      },
      {
        src: "/cusa-saac.webp",
        alt: "SAAC meeting",
        type: "image"
      },
      {
        src: "/api/placeholder/800/600",
        alt: "SAAC meeting",
        type: "image"
      },
    ]
  },
  {
    title: "Full Stack Development",
    description:
      "Experienced in modern full-stack development using React, Next.js, TypeScript, and .NET. Created enterprise solutions at Haering Precision, including a comprehensive CMMS platform and LMS system. Proficient in both frontend technologies (React, HTML, CSS) and backend systems (C#, PostgreSQL, MongoDB), with expertise in CI/CD pipelines and cloud services.",
    media: [
        {
            src: "/api/placeholder/800/600",
            alt: "SAAC meeting",
            type: "image"
          },
          {
            src: "/api/placeholder/800/600",
            alt: "SAAC meeting",
            type: "image"
          },
          {
            src: "/api/placeholder/800/600",
            alt: "SAAC meeting",
            type: "image"
          },
    ]
  },
  {
    title: "Machine Learning & Analytics",
    description:
      "Developed innovative machine learning solutions at Kennesaw State Athletics, creating collaborative feedback models for sports fan engagement. Implemented Python-based vector embedding systems and data pipelines using Docker. Experience with predictive analytics, Tableau dashboards, and combining data science with practical software engineering applications.",
      media: [
        {
            src: "/api/placeholder/800/600",
            alt: "SAAC meeting",
            type: "image"
          },
          {
            src: "/api/placeholder/800/600",
            alt: "SAAC meeting",
            type: "image"
          },
          {
            src: "/api/placeholder/800/600",
            alt: "SAAC meeting",
            type: "image"
          },
    ]
  }
];

const HomeAboutParallax: React.FC = () => {
  return (
    <section className="py-20 w-screen h-screen bg-black">
      {/* <div className="max-w-[75vw] mx-auto"> */}
        <StickyScroll content={content} />
      {/* </div> */}
    </section>
  );
};

export default HomeAboutParallax