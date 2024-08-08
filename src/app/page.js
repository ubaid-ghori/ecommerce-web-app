"use client"
import { useEffect } from "react";
import Image from "next/image";
import AOS from 'aos';
// import 'aos/dist/aos.css';
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


    </>
  );
}
