
"use client";
import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import ProductData from '../../data/productdata';
import Pagination from '../../components/Pagination'; 

const ITEMS_PER_PAGE = 8; 

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(ProductData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = ProductData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className='lg:px-20 px-4 mt-20 flex flex-wrap  items-center gap-10'>
        {currentProducts.map((product, index) => (
          <ProductCard
            key={index}
            img={product.img}
            title={product.title}
            prevPrice={product.prevPrice}
          />
        ))}
      </div>

      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
}

export default Products;
