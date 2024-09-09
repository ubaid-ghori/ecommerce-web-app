import React from 'react'
import Heading from '../components/Heading'
import Description from '../components/Description'
import { BrandData } from '../data/BrandData'
const Brands = () => {
  return (
    <div className='md:px-20 p-4 mt-20'>
    <div>
        <Heading>MOST POPULAR BRANDS</Heading>
        <Description>Sagittis vitae et leo duis ut diam quam nulla. In eu mi bibendum neque egestas congue quisque.Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien.</Description>
    </div>
    <div className='lg:flex block cursor-pointer  gap-5 pt-20' data-aos="fade-up">
        {BrandData?.map((brand,index)=>(
            <div className='transform hover:-translate-y-3 transition-transform duration-300 '>
                <img src={brand?.img} alt="" />
                <div className='flex justify-center items-center p-2'>  
                <img src={brand.img2} className='' alt="" />
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Brands