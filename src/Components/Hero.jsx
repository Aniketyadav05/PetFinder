import React from 'react';
import bg from '../assets/bg.jpg'; // background image

const Hero = () => {
  return (
    <div className="relative w-full bg-white  overflow-hidden p-3">
      <div className="relative w-full h-[550px] lg:h-[580px] ">
        <img
          src={bg}
          alt="hero-bg"
          className="w-full h-full rounded-2xl object-cover"
        />
        <div className="absolute inset-0 bg-black/20 rounded-2xl" />
        
        <div className="absolute top-1/5 left-6 sm:left-12 text-white max-w-[600px]">
          <h1 className="text-left text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            CUTE<br />
            LOYAL AND<br />
            FOREVER YOURS
          </h1>
          <div className="w-24 h-1 bg-orange-500 my-4"></div>
          <p className="text-sm sm:text-base mb-6">
            From playful pups to cuddly kittens<br />we’ve got your match
          </p>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-md font-bold shadow-md hover:bg-yellow-500 transition-all">
            Find Them
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
