import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegUser, FaSearch, FaCartArrowDown } from "react-icons/fa";
import ResponsiveNav from '../components/ResponsiveNav';
import { Search, ShoppingCart } from 'lucide-react';
import SearchInput from '../components/SearchInput';
const navItems = [
  { name: 'Home', link: '/', special: true },
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
              <h2 className={`text-lg font-semibold cursor-pointer transition-all font-body  ${index === 0 ? 'text-hover' : 'hover:text-hover'}`}>
                {item.name}
              </h2>
            </Link>
          ))}
        </div>
        <div className='flex items-center gap-6 text-xl'>
          
          <div className='hidden lg:flex relative'>
            <SearchInput />
          </div>
          <div className='bg-[#4C3BCF] rounded-full p-2 text-white cursor-pointer'>
            <ShoppingCart size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
