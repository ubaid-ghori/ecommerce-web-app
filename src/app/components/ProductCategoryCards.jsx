"use client"
import React from 'react';
import CartIcon from './CartIcon';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Stores/cart';

const ProductCard = ({ id, img, title, prevPrice }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ productId: id, quantity: 1 }));
  };

  return (
    <div className="border rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <div className="w-full h-full">
          <img src={img} alt={title} className="w-80 object-fill cursor-pointer" />
        </div>
        <div className="p-4 pt-10 pb-10 w-full cursor-pointer">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold font-heading text-Text max-w-sm">{title}</h2>
            <div>
              <CartIcon onClick={handleAddToCart} />
            </div>
          </div>
          <span className="text-Text font-heading font-semibold text-md">{prevPrice}</span>
          <div>
            <img src="/assets/images/ratingimage.png" className="w-20" alt="Rating" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
