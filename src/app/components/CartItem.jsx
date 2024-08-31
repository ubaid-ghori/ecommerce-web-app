"use clinet"
import React,{useState,useEffect} from 'react'
import { ProductCategoryData } from '../data/ProductCategoryData' 
const CartItem = ({id,image,price}) => {
    const {id,image,price} = props
    const [productId,quantity]=props.data
    const [detail,setdetails]=useState([])
    useEffect(()=>{
    const findDetails= ProductCategoryData.find((item)=>item.id===productId)[0]
    setdetails(findDetails)
    },[productId])
    console.log(detail)
  return (
    <div>CartItem</div>
  )
}

export default CartItem