import React from 'react';
import bg from '../assets/bg.jpg'; // background image

const Hero = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden px-3 py-6">
      <div className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[580px] rounded-2xl">
        <img
          src={bg}
          alt="hero-bg"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/20 rounded-2xl" />

        <div className="absolute top-1/3 sm:top-1/5 left-4 sm:left-10 md:left-12 text-white max-w-[90%] sm:max-w-[600px]">
          <h1 className="text-left text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            CUTE<br />
            LOYAL AND<br />
            FOREVER YOURS
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-orange-500 my-3 sm:my-4"></div>
          <p className="text-sm sm:text-base mb-4 sm:mb-6 font-bold">
            From playful pups to cuddly kittens<br />we’ve got your match
          </p>
          <button className="bg-yellow-400 text-black px-5 sm:px-6 py-2 rounded-md font-bold shadow-md hover:bg-yellow-500 transition-all">
            Find Them
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
