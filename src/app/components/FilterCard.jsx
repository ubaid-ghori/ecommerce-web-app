"use client";
import { Filter } from 'lucide-react';
import React, { useState } from 'react';

const FilterCard = ({ setFilters }) => {
    const [selectedPrice, setSelectedPrice] = useState('All');

    const handlePriceChange = (event) => {
        const value = event.target.value;
        setSelectedPrice(value);
        setFilters(prevFilters => ({ ...prevFilters, price: value }));
    };

    return (
        <div>
            <div className='flex gap-2 items-center cursor-pointer justify-start'>
                <Filter size={30} />
                <h2 className='text-xl font-heading text-Text font-semibold'>Filter</h2>
            </div>
            <div className='pt-10'>
                <h2 className='font-semibold text-2xl text-Text font-heading'>Price</h2>
                <div className='flex gap-4 items-center mt-5'>
                    <input 
                        type="radio" 
                        className='radio' 
                        value="All" 
                        checked={selectedPrice === 'All'} 
                        onChange={handlePriceChange} 
                    />
                    <p className='text-Text font-heading text-lg font-medium'>All</p>
                </div>
                <div className='flex gap-4 items-center mt-2'>
                    <input 
                        type="radio" 
                        className='radio' 
                        value="$50 to $100" 
                        checked={selectedPrice === '$50 to $100'} 
                        onChange={handlePriceChange} 
                    />
                    <p className='text-Text font-heading text-lg font-medium'>$50 to $100</p>
                </div>
                <div className='flex gap-4 items-center mt-2'>
                    <input 
                        type="radio" 
                        className='radio' 
                        value="$150 to $200" 
                        checked={selectedPrice === '$150 to $200'} 
                        onChange={handlePriceChange} 
                    />
                    <p className='text-Text font-heading text-lg font-medium'>$150 to $200</p>
                </div>
                <div className='flex gap-4 items-center mt-2'>
                    <input 
                        type="radio" 
                        className='radio' 
                        value="Over $200" 
                        checked={selectedPrice === 'Over $200'} 
                        onChange={handlePriceChange} 
                    />
                    <p className='text-Text font-heading text-lg font-medium'>Over $200</p>
                </div>
            </div>
        </div>
    );
};

export default FilterCard;
