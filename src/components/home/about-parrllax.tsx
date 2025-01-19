'use client'

import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { homePageContent } from "@/types/home";
import { Circle, ArrowRight } from "lucide-react";

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
        className="h-full w-full object-cover rounded-lg"
      >
        <source src={media.src} type="video/mp4" />
      </video>
    );
  }
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      src={media.src}
      alt={media.alt}
      className="h-full w-full object-cover rounded-lg"
    />
  );
};

const ParallaxAbout: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardLength = homePageContent.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.floor(latest * cardLength),
      cardLength - 1
    );
    
    if (activeCard !== index) {
      setActiveCard(index);
    }
  });

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-black relative"
      style={{ height: `${cardLength * 100}vh` }} // Total height based on number of cards
    >
      <div className="sticky top-0 h-screen flex items-center justify-between mx-auto w-[80vw] px-4">
        <div className="flex-1 max-w-2xl">
          <div className="w-full">
            {homePageContent.map((item, index) => (
              <motion.div 
                key={item.title}
                className="absolute w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeCard === index ? 1 : 0,
                  y: activeCard === index ? 0 : 20
                }}
                transition={{ duration: 0.5 }}
              >
                <div                 className="space-y-6">
                  {/* Section indicator */}
                  <div className="flex items-center space-x-2 mb-4">
                    <Circle className="w-2.5 h-2.5 fill-current text-slate-500" />
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Section {index + 1} of {homePageContent.length}
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
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeCard === index ? 1 : 0 }}
                    className="flex items-center space-x-4 mt-8"
                  >
                    <button className="group inline-flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors">
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.div>

                  {/* Progress indicators */}
                  <div className="flex space-x-2">
                    {Array.from({ length: cardLength }).map((_, i) => (
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
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block flex-1 max-w-[600px]">
          {homePageContent[activeCard].media[0] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
              }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-lg aspect-[4/5] bg-slate-900/50 backdrop-blur-sm"
            >
              <MediaDisplay
                media={homePageContent[activeCard].media[0]}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          )}
        </div>
      </div>

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

export default ParallaxAbout;