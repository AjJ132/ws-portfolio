'use client';

import { TracingBeam } from '@/components/ui/tracing-beam';
import React from 'react';

import Image from "next/image";


const aboutContent = [
  {
    title: "Early Beginnings in Technology and Athletics",
    description: (
      <>
        <p>
          My technical journey began in high school when I joined the Technology Student Association (TSA). 
          I developed video games using Unity and C#, creating 3D models for our team projects. Our dedication 
          led to remarkable success, securing three state championships and a national title in video game design.
        </p>
        <p>
          Parallel to my technical pursuits, I took up pole vaulting with intense dedication. From December 
          of my sophomore year through May of my senior year, I committed to a rigorous schedule, driving 
          three days a week from Hartwell, GA to Atlanta, GA—a two-hour journey each way—to train. This 
          dedication to both technology and athletics would shape my future path.
        </p>
      </>
    ),
    badge: "Origins",
    image:
      "/senior_day.jpg",
    alt: "TSA",
  },
  {
    title: "College Journey and Technical Growth",
    description: (
      <>
        <p>
          After signing with Kennesaw State University in fall 2021, I immersed myself in software development. 
          My first breakthrough came with a summer internship at Haering Precision in Lavonia, GA, where I 
          expanded my C# knowledge beyond console applications and delved into full-stack development. Working 
          on a CMS system for on-site machines, I gained practical experience with SQL and deadline-driven 
          projects.
        </p>
        <p>
          My technical skills grew as I created an innovative project tracking the Kennesaw State University 
          bus system using location APIs and statistical analysis to predict movements and analyze delays. 
          Meanwhile, I excelled in athletics, securing two conference championships and making two first-round 
          appearances in track and field.
        </p>
        <p>
          Through intense dedication, I completed my degree in just three years, tackling four 18-hour semesters 
          and one 21-hour semester. My achievements were recognized with the Outstanding Student Award from the 
          software engineering college in my final semester.
        </p>
      </>
    ),
    badge: "Academic Journey",
    image:
      "/pv.jpg",
    alt: "Pole Vaulting",
  },
  {
    title: "Professional Development and Innovation",
      description: (
        <>
          <p>
            Post-graduation, I joined the athletic department, where I developed a machine learning system 
            analyzing ticket sales data to predict potential season ticket buyers for the football program. 
            This project evolved into my current work on a comprehensive system that scrapes football 
            information and employs machine learning for predictive analytics on player performance and team fit.
          </p>
          <p>
            My journey has been marked by continuous learning and innovation, from mastering containerization 
            and Kubernetes to developing Stride Sync, a web scraping application for track and field information. 
            As SAAC president and a member of the Provost&apos;s Athletic Oversight Committee, I&apos;ve combined my 
            technical expertise with leadership skills to make meaningful contributions to both athletics and 
            technology.
          </p>
        </>
      ),
    badge: "Professional Growth",
    image:
      "/aj-1.jpg",
    alt: "Photo of AJ",
  },
];


const AboutPage: React.FC = () => {
  return (
    <TracingBeam>
        <div className="max-w-2xl mx-auto antialiased pt-4 relative mb-40 mt-20">
            {aboutContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-10">
                    <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {item.badge}
                    </h2>

                    <p className="text-xl mb-4">
                    {item.title}
                    </p>

                    <div className="text-sm  prose prose-sm dark:prose-invert">
                    {item?.image && (
                        <Image
                            src={item.image}
                            alt={item.alt}
                            height="1000"
                            width="1000"
                            className="rounded-lg mb-10 object-cover"
                        />
                    )}
                    {item.description}
                    </div>
                </div>
            ))}
        </div>
    </TracingBeam>
  );
};

export default AboutPage;