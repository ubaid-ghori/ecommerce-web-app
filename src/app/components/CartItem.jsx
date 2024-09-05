"use client";
import React, { useState, useEffect } from 'react';
import SportsData from '../data/SportsData'

const CartItem = ({ data }) => {
  const { productId, quantity } = data;
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const findDetails = SportsData.find((item) => item.id === productId);
    setDetail(findDetails);
  }, [productId]);
  console.log(detail);

  return (
    <div>
     <img src={detail?.img} alt={detail?.name}  />
     {/* <h3>{detail?.title}</h3> */}
    </div>
  );
};

export default CartItem;
