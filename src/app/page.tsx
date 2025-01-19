import React from 'react';
import Hero from '@/components/home/hero';
import HomeAboutParallax from '@/components/home/about-parrllax';
import FeaturedTeaser from '@/components/home/featured-work';


const HomePage = () => {
  return (
    
      <div className="min-h-screen">
        <Hero />

        <HomeAboutParallax />

        <FeaturedTeaser />

      </div>

  );
};

export default HomePage;