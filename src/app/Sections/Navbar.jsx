"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ResponsiveNav from "../components/ResponsiveNav";
import SearchInput from "../components/SearchInput";
import CartIcon from "../components/CartIcon";
import { usePathname, useRouter } from "next/navigation"; 

const navItems = [
  { name: "Home", link: "/", special: true },
  { name: "Store", link: "/Products" },
  { name: "About", link: "/About" },
  { name: "Blog", link: "/" },
  { name: "Contact", link: "/" },
];

const Navbar = () => {
  const pathname = usePathname(); 
  const router = useRouter(); 

  return (
    <div className="px-4 lg:px-20 shadow-sm">
      <div className="flex justify-between items-center py-4">
        <div className="lg:hidden">
          <ResponsiveNav navItems={navItems} />
        </div>
        <div>
          <Image src="/assets/images/Logo.png" width={160} height={160} alt="Logo" />
        </div>
        <div className="hidden lg:flex gap-8">
          {navItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <h2
                className={`text-lg font-semibold cursor-pointer transition-all font-body ${
                  pathname === item.link ? "text-hover" : "hover:text-hover"
                }`}
              >
                {item.name}
              </h2>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6 text-xl">
          <div className="hidden lg:flex relative">
            <SearchInput />
          </div>
          <div
            className="relative"
            onClick={() => router.push("/Cart")}
            aria-label="Cart"
          >
            <CartIcon />
            <span className="absolute -top-1 -right-2 bg-[#FFD700] text-white rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
