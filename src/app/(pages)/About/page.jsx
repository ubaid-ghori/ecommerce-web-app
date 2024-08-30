import React from 'react';
import { AboutData } from '../../data/AboutData';

const About = () => {
  return (
    <div className=' mt-20'>
      <div className='block lg:px-20 px-4 lg:flex justify-evenly gap-40 items-center'>
        <div>
          <h2 className='text-5xl font-heading font-bold' >{AboutData.title}</h2>
          <p className='max-w-md text-Text mt-5 leading-8'>{AboutData.desc}</p>
        </div>
        <div className='relative lg:mt-0 mt-5'>
          <img src={AboutData.image1} alt="Durable Shoes 1" className='lg:block hidden top-24 -left-32 absolute w-60 h-60 rounded-md' />
          <img src={AboutData.image2} alt="Durable Shoes 2" className='rounded-md w-full h-full lg:w-[450px] lg:h-[450px]' />
        </div>
      </div>
      <div className='mt-20'>
        <video src='/assets/Video.mp4'  autoPlay loop muted  className='w-full'></video>
      </div>
    </div>
  );
};

export default About;
