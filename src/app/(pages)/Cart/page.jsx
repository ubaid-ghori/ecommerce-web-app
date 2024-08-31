"use client"
import React from "react";
import Button from '../../components/Button'
import Link from 'next/link'
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem";
const Cart = () => {
  const carts=useSelector(store=>store.cart.items)
  return (
    <div className="pt-20 flex flex-col  justify-center">

      <div>
        {carts.map((item,index)=>
        <CartItem />
        )}
      </div>

      <h2 className=" text-Text text-4xl font-bold font-body text-center ">
      Your cart is empty
      </h2>
      <div className="flex justify-center items-center mt-10">
        <Button>
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
      <div>
        <h2 className=" text-Text text-xl font-bold font-heading mt-10 text-center">Have an account?</h2>
        <p className="text-Text font-medium font-body text-md mt-2 text-center"> <a className=" underline" href="/">Log in</a> to check out faster.</p>
      </div>
    </div>
    
  );
};

export default Cart;
