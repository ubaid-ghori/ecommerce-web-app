"use client";
import React, { useState, useEffect } from "react";
import ProductCategoryListData from "../data/ProductCategoryListData";
import { useParams } from "next/navigation";

const CartItem = ({ data }) => {
  const { productId, quantity } = data;
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const findDetails = ProductCategoryListData.find((item) => item.id === productId);
    setDetail(findDetails);
  }, [productId]);
  console.log(detail);

  return (
    <div className=" flex justify-center items-center gap-4">
      <img src={detail?.img} alt={detail?.name} />
      <h3>{detail?.title}</h3>
    </div>
  );
};

export default CartItem;
