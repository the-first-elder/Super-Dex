import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center w-full text-lg font-medium text-white max-md:max-w-full">
      <div className="self-stretch my-auto text-2xl font-bold">SuperDex</div>
      <nav className="flex gap-10 items-center my-auto min-w-[240px] text-zinc-400">
        <a href="#buy" className="my-auto">Buy</a>
        <a href="#swap" className="my-auto">Swap</a>
        <a href="#portfolio" className="my-auto">Portfolio</a>
      </nav>
      {/* <div className="overflow-hidden px-11 py-3.5 my-auto bg-sky-500 rounded-[32px] w-[196px] max-md:px-5"> */}
        {/* 0x35...a56 */}
        <w3m-button />
      {/* </div> */}
    </header>
  );
};

export default Header;