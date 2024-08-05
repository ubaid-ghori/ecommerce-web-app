// src/app/product/[id]/page.js

"use client"; // Keep this line if you're using client-side functionality
import React, { useState, useEffect } from 'react';

const SingleProduct = ({ params }) => {
  const { id } = params; // Get the product ID from the route params
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Show a loading state while fetching
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default SingleProduct;
