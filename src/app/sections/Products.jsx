"use client";
import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(data=>data.products)
      setProducts(products)
      console.log(products)
  }

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Products;
