"use client";
import React, { useState } from 'react';
import BootsData from '../../../data/BootsData';
import ProductCategoryCard from '../../../components/ProductCategoryCards';
import Pagination from '../../../components/Pagination'; // Import the Pagination component
import Link from 'next/link';
import FilterCard from '../../../components/FilterCard';
const ITEMS_PER_PAGE = 6;

const Boots = () => {
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

  const filteredProducts = applyFilters(BootsData);
  const totalPages = Math.ceil(BootsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);
 

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='px-10 pt-20'>
    <div className='lg:flex block'>
    <div className='w-[40%]'>
          <FilterCard setFilters={setFilters} />
        </div>
      <div className='flex flex-wrap justify-center gap-5 pt-10'>
        {currentProducts.map((product, index) => (
         <Link href={`/Boots/${product.id}`} key={index}>
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

export default Boots;
