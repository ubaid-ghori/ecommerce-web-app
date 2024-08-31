"use client";
import React from "react";
import Button from '../components/Button';
import Link from 'next/link';
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
  // Ensure that the hook is called at the top level of the component
  const carts = 1;

  return (
    <div className="pt-20 flex flex-col justify-center">
      <div>
        {carts.length ? (
          carts.map((item, index) => <CartItem key={index} data={item} />)
        ) : (
          <h2 className="text-Text text-4xl font-bold font-body text-center">
            Your cart is empty
          </h2>
        )}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Button>
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
      <div>
        <h2 className="text-Text text-xl font-bold font-heading mt-10 text-center">
          Have an account?
        </h2>
        <p className="text-Text font-medium font-body text-md mt-2 text-center">
          <Link className="underline" href="/">Log in</Link> to check out faster.
        </p>
      </div>
    </div>
  );
};

export default Cart;
