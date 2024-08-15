import React from 'react';
import CartIcon from './CartIcon';

const ProductCard = ({ img, title, prevPrice }) => {
  return (
    <div className="border rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <div className="w-full flex justify-center items-center">
          <img
            src={img}
            alt={title}
            className="w-80 h-72 object-contain p-5 transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </div>
        <div className="mt-4 p-4 bg-gray-100 w-full cursor-pointer">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold font-heading text-wrap text-Text line-clamp-2 overflow-hidden text-ellipsis whitespace-nowrap">
              {title}
            </h2>
            <div>
              <CartIcon />
            </div>
          </div>
          <span className="text-Text font-heading font-semibold text-md">{prevPrice}</span>
          <div>
            <img src="/assets/images/ratingimage.png" className="w-20" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
