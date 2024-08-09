import React from 'react'
import Heading from '../components/Heading'
import Description from '../components/Description'
import { ProductCategoryData } from '../data/ProductCategoryData'
import Image from 'next/image'
import Link from 'next/link'
const ProductCategory = () => {
  return (
    <div className='md:px-20 px-4 pt-20'>
        <div>
            <Heading>OUR PRODUCT CATEGORY</Heading>
            <Description>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Description>
        </div>
        <div className='flex gap-8  justify-center items-center pt-10'>
            {ProductCategoryData?.map((products,index)=>(
                <div key={index} className=''>
                    <Link href={products.link}>
                    <Image src={products.image} alt={products.title} width={200} height={250} />
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductCategory