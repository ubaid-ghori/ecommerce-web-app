"use client"
import { useEffect } from "react";
import Image from "next/image";
import Products from "./Products";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
      easing: 'ease-in-out', 
    });
  }, []);
  return (
    <>
    <Navbar />
    <Hero />    
    <Products />

    </>
  );
}
