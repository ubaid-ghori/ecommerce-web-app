"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import Sportsdata from '../../../data/SportsData';
import DetailCard from '../../../components/DetailCard';
const SportsDetails = () => {
   const {id} = useParams();
   console.log(id);
   const product = Sportsdata?.filter((item) => item.id == id)
  return (
    <div>
        {product?.map((item,index)=>(
           <DetailCard image={item.img} title={item.title} price={item.prevPrice} key={index}/>
        ))}
    </div>
  )
}

export default SportsDetails