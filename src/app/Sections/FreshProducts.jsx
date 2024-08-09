"use client";
import data from '../data/productdata';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Heading from '../components/Heading';
import Description from '../components/Description';
import ProductCard from '../components/ProductCard';

const Products = () => {
  return (
    <div className='px-8 py-20'>
      <div className='pb-20'>
        <Heading>FRESH PICKS FOR YOU</Heading>
        <Description>
          Habitant morbi tristique senectus et netus et malesuada. Dolor sed viverra ipsum nunc aliquet bibendum. Magna ac placerat vestibulum lectus mauris ultrices eros in.
        </Description>
      </div>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
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
        {data.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
