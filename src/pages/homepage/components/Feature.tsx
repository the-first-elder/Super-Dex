import React from 'react';
import pic1 from "../../../../public/pic1.png";
import pic2 from "../../../../public/pic2.png";
import pic3 from "../../../../public/pic3.png";

const Feature = () => {
  return (
    <div className="mt-10 flex gap-5 justify-between items-center text-3xl overflow-hidden text-white max-md:flex-wrap">
      <img src={pic1} alt="" className="w-[30%] max-md:w-full" />
      <img src={pic2} alt="" className="w-[30%] max-md:w-full" />
      <img src={pic3} alt="" className="w-[30%] max-md:w-full" />
    </div>
  );
}

export default Feature;