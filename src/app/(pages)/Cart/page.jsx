"use client";
import React from "react";
import Button from '../../components/Button';
import Link from 'next/link';
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem";

const Cart = () => {
  const carts = useSelector((store) => store.cart.items);

  return (
    <div className="pt-20 flex flex-col justify-center items-center">
      <div>
        {carts.length > 0 ? (
          carts.map((item, index) => <CartItem key={index} data={item} />)
        ) : (
          <div className="text-center">
            <h2 className="text-Text text-4xl font-bold font-body">
              Your cart is empty
            </h2>
            <div className="flex justify-center items-center mt-10">
              <Link href="/" passHref>
                <Button>Continue Shopping</Button>
              </Link>
            </div>
            <div>
              <h2 className="text-Text text-xl font-bold font-heading mt-10">
                Have an account?
              </h2>
              <p className="text-Text font-medium font-body text-md mt-2">
                <Link href="/" className="underline">
                  Log in
                </Link>{" "}
                to check out faster.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
