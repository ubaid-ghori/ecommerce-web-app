import React from 'react';
import CartIcon from './CartIcon';
import { useSelector } from 'react-redux';

const ProductCard = ({ img, title, prevPrice }) => {
  const carts = useSelector(store => store.cart.items);
  console.log(carts);

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
