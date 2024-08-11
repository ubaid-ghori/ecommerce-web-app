import React from 'react';
import ProductData from './data/productdata';
import ProductCard from './components/ProductCard';

const AllProducts = () => {
    console.log("ProductData",ProductData)
    return (
      <div>
        {ProductData.map((product, index) => (
          <ProductCard product={product}  key={index} />
        ))}
      </div>
    );
  };
export default AllProducts;
