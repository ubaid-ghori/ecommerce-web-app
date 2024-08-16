// Formal.js
"use client";
import React, { useState } from 'react';
import FormalData from '../../../data/FormalData';
import ProductCategoryCard from '../../../components/ProductCategoryCards';
import Pagination from '../../../components/Pagination'; // Import the Pagination component
import Link from 'next/link';

const ITEMS_PER_PAGE = 7;

const Formal = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(FormalData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = FormalData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='px-20 pt-20'>
      <div className='flex flex-wrap gap-10 justify-center items-center'>
        {currentProducts.map((product, index) => (
         <Link href={`/Formal/${product.id}`} key={index}>
          <ProductCategoryCard 
            key={index} 
            product={product} 
            img={product.img} 
            title={product.title} 
            prevPrice={product.prevPrice} 
          />
         </Link>
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

export default Formal;
