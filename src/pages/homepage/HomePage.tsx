import React from 'react';
import Hero from './components/Hero';
import Feature from './components/Feature';

const HomePage: React.FC = () => {
  return (
      <div className="flex flex-col self-center mt-14 w-full text-white max-w-[1549px] max-md:mt-10 max-md:max-w-full">
        <Hero />
        <Feature />
      </div>
  );
};

export default HomePage;