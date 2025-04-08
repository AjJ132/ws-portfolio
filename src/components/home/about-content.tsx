'use client'

import React from "react";
import { cn } from "@/lib/utils";
import { homePageContent } from "@/types/home";
import { Circle, ArrowRight } from "lucide-react";
import Image from "next/image";

interface MediaItem {
  src: string;
  alt: string;
  type: "image" | "video";
}

interface MediaDisplayProps {
  media: MediaItem;
}

const MediaDisplay: React.FC<MediaDisplayProps> = ({ media }) => {
  if (media.type === "video") {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-lg"
      >
        <source src={media.src} type="video/mp4" />
      </video>
    );
  }
  return (
    <Image
      width={960}
      height={540}
      src={media.src}
      alt={media.alt}
      className="w-full h-full object-cover rounded-lg"
      priority
    />
  );
};

const ContentCard: React.FC<{ item: typeof homePageContent[0]; index: number; total: number }> = ({ 
  item, 
  index,
  total
}) => {
  // Fixed aspect ratio for all content cards
  // const aspectRatio = "16/9"; // 16:9 aspect ratio
  const isEven = index % 2 === 0;
  
  // Create content element
  const contentElement = (
    <div className="flex-1 max-w-2xl my-8 md:my-16">
      <div className="space-y-4">
        {/* Section indicator */}
        <div className="flex items-center space-x-2 mb-2">
          <Circle className="w-2.5 h-2.5 fill-current text-slate-500" />
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Section {index + 1} of {total}
          </span>
        </div>

        {/* Title with gradient accent */}
        <h2 className="text-4xl font-bold text-slate-100 tracking-tight leading-tight">
          {item.title}
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
            .
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
          {item.description}
        </p>

        {/* Call to action */}
        <div className="flex items-center space-x-4 mt-6">
          <button className="group inline-flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors"
            onClick={() => window.location.href = item.learnMoreLink}
            >
            Learn more
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Progress indicators */}
        <div className="flex space-x-2">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-[2px] w-8 transition-all duration-300",
                i === index ? "bg-white" : "bg-slate-700"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );

  // Create media element
  const mediaElement = item.media[0] && (
    <div className="flex-1 max-w-[640px]">
      <div className="relative overflow-hidden rounded-lg aspect-video bg-black flex items-center justify-center">
        <MediaDisplay media={item.media[0]} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>
    </div>
  );
  
  return (
    <div className="py-16 flex items-center justify-between w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between mx-auto w-[90vw] max-w-[1280px] gap-8">
        {isEven ? (
          <>
            {contentElement}
            {mediaElement}
          </>
        ) : (
          <>
            {mediaElement}
            {contentElement}
          </>
        )}
      </div>
    </div>
  );
};

const ScrollingAbout: React.FC = () => {
  return (
    <section className="w-full bg-black py-8 flex flex-col gap-8 md:gap-16">
      {homePageContent.map((item, index) => (
        <ContentCard 
          key={item.title} 
          item={item} 
          index={index}
          total={homePageContent.length}
        />
      ))}

      <style jsx global>{`
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default ScrollingAbout;