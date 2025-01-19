import React from 'react';
import Hero from '@/components/home/hero';
import HomeAboutParallax from '@/components/home/about-parrllax';


const HomePage = () => {
  return (
    
      <div className="min-h-screen">
        <Hero />

        <HomeAboutParallax />

      </div>

  );
};

export default HomePage;