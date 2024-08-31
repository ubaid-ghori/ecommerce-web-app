"use client";
import React, { useState, useEffect } from 'react';
import { ProductCategoryData } from '../data/ProductCategoryData';

const CartItem = ({ data }) => {
  const { productId, quantity } = data;
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const findDetails = ProductCategoryData.find((item) => item.id === productId);
    setDetail(findDetails);
  }, [productId]);
  console.log(detail);

  return (
    <div>
     <img src={detail?.image} alt={detail?.name}  />
     <h3>{detail?.title}</h3>
    </div>
  );
};

export default CartItem;
