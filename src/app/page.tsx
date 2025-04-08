import React from 'react';
import Hero from '@/components/home/hero';
import FeaturedTeaser from '@/components/home/featured-work';
import ScrollingAbout from '@/components/home/about-content';


const HomePage = () => {
  return (
    
      <div className="min-h-screen">
        <Hero />

        <ScrollingAbout />
        
        <FeaturedTeaser />

      </div>

  );
};

export default HomePage;