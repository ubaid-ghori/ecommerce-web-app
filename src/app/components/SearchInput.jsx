"use client";
import { Search } from 'lucide-react';
import React, { useState } from 'react';

const SearchInput = ({ className }) => {
  const productsList = [
    
  ];

  const [products, setProducts] = useState(productsList);
  const [searchValue, setSearchValue] = useState("");

  function handleSearchClick() {
    if (searchValue === "") {
      setProducts(productsList);
      return;
    }
    const filterBySearch = productsList.filter((item) => {
      return item.toLowerCase().includes(searchValue.toLowerCase());
    });
    setProducts(filterBySearch);
  }

  return (
    <div>
      <div className='flex relative'>
        <input
          type="text"
          placeholder='Search'
          className='px-2 text-sm bg-slate-200 rounded-full p-2 lg:w-72 w-full h-12'
          onChange={e => setSearchValue(e.target.value)} 
          value={searchValue}
        />
        <div
          className='absolute flex justify-center items-center right-0 h-12 w-12 rounded-full bg-hover p-2 text-white cursor-pointer'
          onClick={handleSearchClick} 
        >
          <Search size={20} />
        </div>
      </div>
      {products.map((product, index) => {
        return (
          <div key={index}>{product}</div> 
        );
      })}
    </div>
  );
}

export default SearchInput;