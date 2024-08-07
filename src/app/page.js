import Image from "next/image";
import Products from "./Products";
// import Hero from "./Hero";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    {/* <Products />
  <Hero /> */}
    </>
  );
}
