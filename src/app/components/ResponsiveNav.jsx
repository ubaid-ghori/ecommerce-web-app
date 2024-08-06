"use client"
import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci"; 
import { IoArrowBackOutline } from "react-icons/io"; 
import { FaRegUser, FaCartArrowDown, FaSearch } from "react-icons/fa"; 
import Link from 'next/link';
import { IoClose } from "react-icons/io5";
const ResponsiveNav = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoClose  className="text-2xl" /> : <CiMenuFries /> }
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-10">
          {navItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <h2 className="block px-4 py-2 text-lg font-semibold">{item.name}</h2>
            </Link>
          ))}
          <div className="flex justify-around py-4">
            <FaRegUser />
            <FaSearch />
            <FaCartArrowDown />
          </div>
        </div>
      )}
    </div>
  );
}

export default ResponsiveNav;
