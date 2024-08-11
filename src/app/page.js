"use client";
import { useEffect, useState } from "react";
import AOS from 'aos';
import Hero from "./Sections/Hero";
import 'aos/dist/aos.css';
import Products from "../app/Sections/FreshProducts";
import Brands from "./Sections/Brands";
import ProductCategory from "./Sections/ProductCategory";
import Sale from "./Sections/Sale";
import Faqs from "./Sections/Faqs";
import Loading from './Loading'; // Make sure to import your Loading component

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    AOS.init({
      duration: 1600,
    });
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return <Loading />; // Render loading component while loading
  }
  
  return (
    <>
      <Hero />
      <ProductCategory />
      <Products />
      <Brands />
      <Sale />
      <Faqs />
    </>
  );
}


