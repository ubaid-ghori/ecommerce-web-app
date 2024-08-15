"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import Sportsdata from '../../../data/SportsData';

const SportsDetails = () => {
   const {id} = useParams();
   console.log(id);
   const product = Sportsdata?.filter((item) => item.id == id)
  return (
    <div>
        {product?.map((item,index)=>(
            
            <div key={index}>
                <img src={item.img} alt="" />
                <h1>{item.title}</h1>
            </div>
        ))}
    </div>
  )
}

export default SportsDetails