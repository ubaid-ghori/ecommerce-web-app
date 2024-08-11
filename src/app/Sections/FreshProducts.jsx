"use client";
import data from '../data/productdata';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Heading from '../components/Heading';
import Description from '../components/Description';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
const Products = () => {
  const [item, setItem] = useState(data);
  const [activeCategory, setActiveCategory] = useState('all');

  const filterItem = (cateItem) => {
    const updatedItem = data?.filter((CurEle) => CurEle.name === cateItem);
    setItem(updatedItem);
    setActiveCategory(cateItem);
  };

  return (
    <div className='px-8 py-20'>
      <div className=''>
        <Heading>FRESH PICKS FOR YOU</Heading>
        <Description>
          Habitant morbi tristique senectus et netus et malesuada. Dolor sed viverra ipsum nunc aliquet bibendum. Magna ac placerat vestibulum lectus mauris ultrices eros in.
        </Description>
      </div>
      <div className='flex justify-center cursor-pointer pt-10 text-Text font-heading font-semibold text-lg items-center gap-10'>
        <h2
          onClick={() => {
            setItem(data);
            setActiveCategory('all');
          }}
          className={`transition-colors duration-300 ${
            activeCategory === 'all' ? 'text-bgColor' : 'text-Text'
          }`}
        >
          SHOP ALL
        </h2>
        <h2
          onClick={() => filterItem('men')}
          className={`transition-colors duration-300 ${
            activeCategory === 'men' ? 'text-bgColor' : 'text-Text'
          }`}
        >
          MENS
        </h2>
        <h2
          onClick={() => filterItem('women')}
          className={`transition-colors duration-300 ${
            activeCategory === 'women' ? 'text-bgColor' : 'text-Text'
          }`}
        >
          WOMENS
        </h2>
      </div>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {item.map((product, index) => (
          <SwiperSlide key={index} className='pt-20'>
      <ProductCard product={product} img={product.img} title={product.title} prevPrice={product.prevPrice} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=' flex justify-center items-center pt-20'>
        <Button>VIEW ALL PRODUCTS</Button>
      </div>
    </div>
  );
};

export default Products;
