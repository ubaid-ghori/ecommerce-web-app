"use client"
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { CircleCheckBig, Heart, Share2, Plus, Minus } from 'lucide-react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Stores/cart';

const DetailCard = ({ title, image, desc, price, btnText, id }) => {
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    setPosition({ x: (x / width) * 100, y: (y / height) * 100 });
  };

  const handleMouseEnter = () => setZoom(true);
  const handleMouseLeave = () => setZoom(false);

  const handleMinus = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handlePlus = () => setQuantity((prev) => prev + 1);

  const handleAddToCart = () => {
    dispatch(addToCart({ productId: id, quantity }));
  };

  return (
    <div className="md:px-20 px-4 pt-20">
      <div className="lg:flex block gap-20 items-center">
        <div
          className="relative w-full lg:w-2/4"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`overflow-hidden rounded-lg ${zoom ? 'cursor-zoom-in' : ''}`}>
            <Image
              src={image}
              width={800}
              height={500}
              className={`rounded-lg transition-transform duration-300 ease-in-out ${zoom ? 'scale-150' : 'scale-100'}`}
              ref={imageRef}
              alt={title}
              style={{ transformOrigin: `${position.x}% ${position.y}%` }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-7 lg:gap-12 mt-10 lg:mt-0">
          <h3 className="lg:text-5xl text-3xl font-heading font-medium text-Text">{title}</h3>
          <p className="font-semibold text-Text text-md lg:max-w-md">{desc}</p>
          <h3 className="text-xl text-bgColor font-semibold">
            <span className="text-Text">Rs:</span> {price}
          </h3>
          <div className="flex flex-wrap gap-5 text-Text font-semibold items-center cursor-pointer">
            <div className="flex gap-2 hover:text-bgColor">
              <Heart />
              <h2>Add To Wishlist</h2>
            </div>
            <div className="flex gap-2 hover:text-bgColor">
              <CircleCheckBig />
              <h2>Add To Compare</h2>
            </div>
            <div className="flex gap-2 hover:text-bgColor">
              <Share2 />
              <h2>Share</h2>
            </div>
          </div>
          <div className="lg:flex block gap-4">
            <div className="flex cursor-pointer w-full lg:w-36 justify-center items-center gap-4 border rounded-full p-2 border-Text lg:mb-0 mb-5">
              <Plus onClick={handlePlus} />
              <h2>{quantity}</h2>
              <Minus onClick={handleMinus} />
            </div>
            <div>
              <Button
                className={`!bg-white hover:bg-bgColor !text-Text border-2 border-Text`}
                onClick={handleAddToCart}
              >
                Add To Cart
              </Button>
            </div>
          </div>
          <div>
            <Button>Buy it Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
