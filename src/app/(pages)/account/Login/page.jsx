"use client";
import Input from "../../../components/Input";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "../../../components/Button";

const Login = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center px-4 mt-20 mb-20">
      <div className="bg-[#F0F0F0] p-6 shadow-md w-full max-w-md lg:max-w-xl">
        <h1 className="text-Text font-semibold text-3xl lg:text-4xl font-heading text-center py-4">
          Log In
        </h1>
        <div className="flex flex-col justify-start items-center gap-4 mt-5">
          <Input placeholder={"Email"} type={'email'} />
          <Input placeholder={"Password"} type={'password'} />
          <Button className=" w-60 !lg:w-96 mt-4 mb-5">
            Sign In
          </Button>
        </div>
        <div className=" text-Text cursor-pointer font-semibold font-body mt-3 flex justify-between items-center px-4 border-t pb-3 border-black pt-4">
          <p>Forgot Password</p>
          <p onClick={() => router.push("/account/SignUp")}>Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
