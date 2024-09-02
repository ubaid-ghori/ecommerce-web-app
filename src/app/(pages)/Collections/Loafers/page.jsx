// Loafers.js
"use client";
import React, { useState } from 'react';
import LoafersData from '../../../data/LoafersData';
import ProductCategoryCard from '../../../components/ProductCategoryCards';
import Pagination from '../../../components/Pagination'; 
import Link from 'next/link';
import FilterCard from '../../../components/FilterCard';

const ITEMS_PER_PAGE = 6;

const Loafers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ price: 'All' });

  const applyFilters = (products) => {
    let filteredProducts = products;

    if (filters.price !== 'All') {
      filteredProducts = filteredProducts.filter(product => {
        const price = parseFloat(product.newPrice.replace('$', ''));
        switch (filters.price) {
          case '$50 to $100':
            return price >= 50 && price <= 100;
          case '$150 to $200':
            return price >= 150 && price <= 200;
          case 'Over $200':
            return price > 200;
          default:
            return true;
        }
      });
    }

    return filteredProducts;
  };

  const filteredProducts = applyFilters(LoafersData);
  const totalPages = Math.ceil(LoafersData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='lg:px-10 px-4 pt-20'>
        <div className='lg:flex block'>
        <div className='w-[40%]'>
          <FilterCard setFilters={setFilters} />
        </div>
      <div className='flex flex-wrap justify-center gap-5 pt-10'>
        {currentProducts.map((product, index) => (
          <Link href={`/Loafers/${product?.id}`}>
          <ProductCategoryCard 
            id={product.id}
            key={index} 
            product={product} 
            img={product.img} 
            title={product.title} 
            prevPrice={product.prevPrice} 
          />
         </Link>
        ))}
      </div>
      </div>

      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
};

export default Loafers;
