import { FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

// <div className="flex items-center space-x-4">
//   <a
//     href="https://twitter.com"
//     className="text-gray-400 hover:text-white"
//   >
//     <FaTwitter size={24} />
//   </a>
//   <a
//     href="https://youtube.com"
//     className="text-gray-400 hover:text-white"
//   >
//     <FaYoutube size={24} />
//   </a>
//   <a
//     href="https://linkedin.com"
//     className="text-gray-400 hover:text-white"
//   >
//     <FaLinkedin size={24} />
//   </a>
//   {/* Add more icons as needed */}
// </div>

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-wrap gap-44 items-center mt-28 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-1/3 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="text-xl font-bold text-white">SuperDex</div>
          <p className="mt-4 text-sm leading-9 text-neutral-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium sapiente quam labore.
          </p>
        </div>
        <div className="flex gap-8 justify-center items-center self-start mt-16 max-md:mt-10">
          <a
            href="https://twitter.com"
            className="text-gray-200 hover:text-white"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https:youtube.com"
            className="text-gray-200 hover:text-white"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https:linkedin.com"
            className="text-gray-200 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div >
      <div className="flex gap-20 items-start text-white">
        <div className="flex flex-col">
          <h3 className="text-base font-medium">Menu</h3>
          <ul className="flex flex-col mt-10 text-sm text-gray-400">
            <li><a href="#buy">Buy</a></li>
            <li className="mt-8"><a href="#swap">Swap</a></li>
            <li className="mt-8"><a href="#portfolio">Portfolio</a></li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-medium">Guide</h3>
          <ul className="flex flex-col mt-10 text-sm text-gray-400">
            <li><a href="#resources">Resources</a></li>
            <li className="mt-8"><a href="#docs">Docs</a></li>
            <li className="mt-8"><a href="#dolor">Dolor</a></li>
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h3 className="text-base font-medium text-white">Subscribe to our newsletter</h3>
            <p className="mt-6 text-sm leading-loose text-neutral-400">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
          <form className="mt-10 w-fit rounded-lg border border-white border-solid">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              type="email"
              id="newsletter-email"
              placeholder="Enter your email"
              className="py-1.5 w-fit rounded-lg bg-transparent text-white px-4"
              aria-label="Enter your email for newsletter subscription"
            />
          </form>
        </div>
      </div>
    </footer >
  );
};

export default Footer;