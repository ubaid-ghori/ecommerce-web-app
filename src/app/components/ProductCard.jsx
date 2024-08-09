import React from 'react';

const ProductCard = ({ product }) => {
    console.log(product);
  return (
    <div className="border rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <div className='p-4'>
          <img src={product?.img} alt={product?.title} className="w-60 h-48 transition-transform duration-300 hover:scale-105 cursor-pointer " />
        </div>
        <div className="mt-10 p-4 pt-10 pb-10 bg-gray-100 w-full cursor-pointer">
         <div className='flex justify-between '>
         <h2 className="text-2xl font-semibold font-heading text-Text  ">{product?.title}</h2>
          <div className='bg-[#4C3BCF] rounded-full p-2 text-white cursor-pointer '>
              {product?.icon}
            </div>
         </div>
         <span className=" text-Text font-heading font-semibold text-md">{product?.prevPrice}</span>
          <div className="flex items-center mt-1 text-yellow-400 text-xl">
          {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                      {i < product.star ? '★' : '☆'}
                    </span>
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
