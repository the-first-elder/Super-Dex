import React from 'react';
import top from "../../../../public/top.png";

const Hero: React.FC = () => {
  return (
    <section className="flex overflow-hidden gap-5 justify-between pl-14 w-full h-[45vh] bg-neutral-900 rounded-[32px] max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
      <div className="flex flex-col mt-14 max-md:mt-10">
        <h2 className="text-3xl font-bold">SuperDex</h2>
        <p className="mt-4 text-xl">Buy, sell, swap and explore tokens</p>
      </div>
      <img src={top} alt="top" className="object-contain rounded-none max-md:max-w-full" />
    </section>
  );
};

export default Hero;