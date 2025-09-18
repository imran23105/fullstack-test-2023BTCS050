import React from "react";

const HeroSection = () => {
  return (
    <div className="px-6 md:px-16 py-16 md:py-20 bg-gradient-to-r from-orange-900 via-black to-gray-900 text-white min-h-[80vh]">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            FUTURE-READY, <br /> SMART BANKING
          </h1>
          
          <button className="mt-8 flex items-center mx-auto md:mx-0 bg-white text-black px-6 py-3 rounded-full text-base sm:text-lg font-medium shadow-lg hover:bg-gray-200 transition">
            Get Started
            <span className="ml-3 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
              →
            </span>
          </button>

          <p className="mt-6 text-gray-300 max-w-xl mx-auto md:mx-0 text-sm sm:text-base">
            This is a space to welcome visitors to the site. Grab their attention
            with copy that clearly states what the site is about.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/474x/56/d8/d3/56d8d3b46b5d6d415b52b010be3f4dc2.jpg?nii=t"
            alt=""
            className="rounded-2xl shadow-lg max-w-full h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
