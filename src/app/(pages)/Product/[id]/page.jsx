"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import Productdata from '../../../data/productdata';
import DetailCard from '../../../components/DetailCard';
const FormalDetails = () => {
   const {id} = useParams();
   console.log(id);
   const product = Productdata?.filter((item) => item.id == id)
  return (
    <div>
        {product?.map((item,index)=>(
           <DetailCard image={item.img} title={item.title} price={item.prevPrice} key={index}/>
        ))}
    </div>
  )
}

export default FormalDetails