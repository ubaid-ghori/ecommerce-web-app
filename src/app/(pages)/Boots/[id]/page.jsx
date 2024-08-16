"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import Bootsdata from '../../../data/BootsData';
import DetailCard from '../../../components/DetailCard';
const BootsDetails = () => {
   const {id} = useParams();
   console.log(id);
   const product = Bootsdata?.filter((item) => item.id == id)
  return (
    <div>
        {product?.map((item,index)=>(
           <DetailCard image={item.img} title={item.title} price={item.prevPrice} key={index}/>
        ))}
    </div>
  )
}

export default BootsDetails