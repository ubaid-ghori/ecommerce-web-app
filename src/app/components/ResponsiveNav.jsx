"use client"
import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci"; 
import { IoClose } from "react-icons/io5";
import Link from 'next/link';

const ResponsiveNav = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoClose className="text-2xl" /> : <CiMenuFries className='text-2xl ' />}
      </div>
      <div className={`fixed h-full top-20 left-0 w-full  bg-slate-50 shadow-sm flex flex-col pt-4 gap-6  z-10 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {navItems.map((item, index) => (
          <Link href={item.link} key={index}>
            <h2 className="block px-4 py-2 text-lg font-semibold">{item.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ResponsiveNav;
