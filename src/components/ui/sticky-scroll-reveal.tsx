"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface MediaItem {
  src: string;
  alt: string;
  type: 'image' | 'video';
}

interface ContentItem {
  title: string;
  description: string;
  media: MediaItem[];
}

interface CarouselMediaProps {
  media: MediaItem[];
}

interface StickyScrollProps {
  content: ContentItem[];
  contentClassName?: string;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div
      className="h-screen overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 bg-black"
      ref={ref}
    >
      <div className="div relative flex items-start px-4 mr-4 h-96">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:block h-96 w-[600px] rounded-md bg-black sticky top-10 overflow-visible ml-4",
          contentClassName
        )}
      >
        <CarouselMedia media={content[activeCard].media} />
      </div>
    </div>
  );
};

const CarouselMedia: React.FC<CarouselMediaProps> = ({ media }) => {
  return (
    <Carousel className="w-full h-full">
      <CarouselContent className="h-full">
        {media.map((item, index) => (
          <CarouselItem key={index} className="h-full">
            <div className="h-96 w-full p-1">
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  className="h-full w-full object-contain rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-contain rounded-lg"
                />
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};