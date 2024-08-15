// Boots.js
"use client";
import React, { useState } from 'react';
import BootsData from '../../../data/BootsData';
import ProductCategoryCard from '../../../components/ProductCategoryCards';
import Pagination from '../../../components/Pagination'; // Import the Pagination component

const ITEMS_PER_PAGE = 6;

const Boots = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(BootsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = BootsData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='px-20 pt-20'>
      <div className='flex flex-wrap gap-10'>
        {currentProducts.map((product, index) => (
          <ProductCategoryCard 
            key={index} 
            product={product} 
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
};

export default Boots;
