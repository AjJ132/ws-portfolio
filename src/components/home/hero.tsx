import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Spotlight } from "../ui/spotlight";

const Hero = () => {
  return (
    <div className="w-full min-h-screen dark:bg-black bg-white dark:bg-dot-white/20 bg-dot-black/20 relative">
      {/* Radial gradient overlay */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* Main content section */}
      <section className="relative z-10 py-32 px-6 min-h-screen flex items-center">
        <Spotlight
          className="-top-40 left-40 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
                Hi, I&apos;m AJ Johnson
                <span className="text-primary">.</span>
              </h1>
              <h2 className="text-2xl sm:text-4xl text-muted-foreground font-medium max-w-3xl">
                Full-Stack Software Engineer building innovative solutions with modern technologies.
              </h2>
            </div>
            <div className="flex gap-6 pt-4">
              <Button size="lg" className="text-lg px-8">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;