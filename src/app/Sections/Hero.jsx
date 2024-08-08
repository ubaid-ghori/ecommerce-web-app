import React from 'react';

const Hero = () => {
  return (
    <div className=" bg-gradient-to-r from-[#280E5A] via-[#3C2992] to-[#190237] text-white py-10 px-10 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center"  >
        <div className="md:w-1/2 w-full md:text-left mb-10 md:mb-0" data-aos="fade-right">
          <h1 className="text-5xl font-bold mb-4">Find Your Perfect Shoes</h1>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae
            vero distinctio enim quae explicabo ut. Recusandae, ratione sequi
            obcaecat.
          </p>
          <button className="bg-purple-500 hover:bg-purple-600 transition duration-300 text-white py-2 px-6 rounded-lg text-lg" data-aos="fade-up">
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2 ">
          <img
            src="/assets/images/Heroimg.png"
            alt="Shoes"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
