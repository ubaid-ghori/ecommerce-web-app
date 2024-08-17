"use client"
import { Filter } from 'lucide-react'
import React, { useState } from 'react'

const FilterCard = () => {
   

    return (
        <div>
            <div className='flex gap-2   items-center cursor-pointer justify-start'>
                <Filter size={30} />
                <h2 className='text-xl font-heading text-Text font-semibold'>Filter</h2>
            </div>

           <div className='pt-10 '>
            <h2 className=' font-semibold text-2xl text-Text font-heading'>Category</h2>
            <input type='checkbox' className='mt-5 rounded-full' />
           </div>
        </div>
    )
}

export default FilterCard
