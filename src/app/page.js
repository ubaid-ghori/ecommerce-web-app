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
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      easing: 'ease-in-out', // Easing for animations
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
