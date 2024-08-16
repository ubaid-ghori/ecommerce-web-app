"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import Loafersdata from '../../../data/LoafersData';
import DetailCard from '../../../components/DetailCard';
const LoafersDetails = () => {
   const {id} = useParams();
   console.log(id);
   const product = Loafersdata?.filter((item) => item.id == id)
  return (
    <div>
        {product?.map((item,index)=>(
           <DetailCard image={item.img} title={item.title} price={item.prevPrice} key={index}/>
        ))}
    </div>
  )
}

export default LoafersDetails