// components/ProductCard.js
import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div>
      <div>
        <Link href={`/Prdouct/${product.id}`}>
         
            <img src={product.thumbnail} alt={product.title} />
     
        </Link>
      </div>
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
