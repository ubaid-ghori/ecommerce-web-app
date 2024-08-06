import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegUser, FaSearch, FaCartArrowDown } from "react-icons/fa";
import ResponsiveNav from '../components/ResponsiveNav';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Store', link: '/' },
  { name: 'Search', link: '/' },
  { name: 'Cart', link: '/' },
  { name: 'Account', link: '/' },
];

const Navbar = () => {
  return (
    <div className='px-4 lg:px-20 shadow-sm'>
      <div className='flex justify-between items-center py-4'>
        <div className='lg:hidden'>
          <ResponsiveNav navItems={navItems} />
        </div>
        <div>
          <Image src='/assets/images/Logo.png' width={160} height={160} alt="Logo" />
        </div> 
        <div className='hidden lg:flex gap-8'>
          {navItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <h2 className='text-lg font-semibold'>{item.name}</h2>
            </Link>
          ))}
        </div>
        <div className='flex gap-6 text-xl'>
          <div className='hidden lg:block'>
            <FaRegUser />
          </div>
          <div className='hidden lg:block'>
            <FaSearch />
          </div>
          <div>
            <FaCartArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
