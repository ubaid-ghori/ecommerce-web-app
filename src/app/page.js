"use client"
import { useEffect } from "react";
import Image from "next/image";
import AOS from 'aos';
import Hero from "./Sections/Hero";
import 'aos/dist/aos.css';
import Products from "../app/Sections/FreshProducts";
import Brands from "./Sections/Brands";
import ProductCategory from "./Sections/ProductCategory";
import Sale from "./Sections/Sale";
import Faqs from "./Sections/Faqs";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1600,
    });
  }, []);
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
