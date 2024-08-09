import React from 'react';
import { HeroData } from '../data/Herodata';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#280E5A] via-[#3C2992] to-[#190237] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 w-full text-center md:text-left mb-10 md:mb-0" data-aos="fade-right">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6">{HeroData.title}</h1>
          <h2 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
            <span dangerouslySetInnerHTML={{ __html: HeroData.Subtitle }} />
          </h2>
          <p className="text-lg md:text-xl mb-8 mt-5 leading-relaxed">
            {HeroData.description}
          </p>
          <button 
            className="bg-purple-500 hover:bg-purple-600 transition-all duration-300 text-white py-3 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105" 
            data-aos="fade-up"
            aria-label="Learn More"
          >
            {HeroData.btn}
          </button>
        </div>
        
        {/* Image Content */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <img
            src="/assets/images/Heroimg.png"
            alt="Hero Section Image"
            className="w-full h-auto rounded-lg "
            data-aos="zoom-in"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
