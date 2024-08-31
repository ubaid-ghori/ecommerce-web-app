"use client"
import React,{useState,useEffect} from 'react'
import products from '../(pages)/Cart'
const CartsItemCard = (props) => {
   const [productId,quantity]=props.data
   const [details,setDetails]=useState([])
   useEffect(()=>{
    const findDetails=products.filter((product)=>product.id===productId)[0];
   },[productId])
  return (
    <div>CartsItemCard</div>
  )
}

export default CartsItemCard