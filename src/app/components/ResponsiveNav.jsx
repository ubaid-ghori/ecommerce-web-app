"use client"
import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci"; 
import { IoClose } from "react-icons/io5";
import Link from 'next/link';
import Search from './Search';
const ResponsiveNav = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=''>
      <div onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoClose className="text-2xl" /> : <CiMenuFries className='text-2xl ' />}
      </div>
      
      <div className={`fixed h-full top-20 left-0 w-full px-4  bg-slate-50 shadow-sm flex flex-col pt-4 gap-6  z-10 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div>
        {navItems.map((item, index) => (
          <Link href={item.link} key={index}>
             <h2 className={`text-lg px-4 p-2 font-semibold cursor-pointer transition-all font-body  ${index === 0 ? 'text-hover' : 'hover:text-hover'}`}>
                {item.name}
              </h2>
          </Link>
        ))}
</div>
        <div>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default ResponsiveNav;
