import React from 'react';
import Heading from '../components/Heading';
import Description from '../components/Description';
import { ProductCategoryData } from '../data/ProductCategoryData';
import Image from 'next/image';
import Link from 'next/link';

const ProductCategory = () => {
  return (
    <div className='md:px-20 px-4 pt-20'>
      <div>
        <Heading>OUR PRODUCT CATEGORY</Heading>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Description>
      </div>

      <div className='flex lg:flex-row flex-col gap-8 justify-center items-center pt-10' data-aos="fade-up">
        {ProductCategoryData?.map((products, index) => (
          <div 
            key={index} 
            className='transform hover:-translate-y-2 transition-transform duration-300 border border-transparent  rounded-full'
          >
            <Link href={products.link}>
              <Image src={products.image} alt={products.name} width={200} height={350} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
