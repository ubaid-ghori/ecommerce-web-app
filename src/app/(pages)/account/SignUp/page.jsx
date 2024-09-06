"use client";
import Input from "../../../components/Input";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "../../../components/Button";

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };  

  const handleChange = (e) => {
    const { name, value } = e.target;
  }

  return (
    <div className="flex justify-center items-center px-4 mt-20 mb-20">
      <div className="bg-[#F0F0F0] p-6 shadow-md w-full max-w-md lg:max-w-xl">
        <h1 className="text-Text font-semibold text-3xl lg:text-4xl font-heading text-center py-4">
          Sign Up
        </h1>
        <p className="text-center text-Text text-sm lg:text-md mt-2 font-medium">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/account/Login")}
            className="font-semibold mx-1 cursor-pointer"
          >
            Sign In
          </span>
        </p>

        <form
          action=""
          className="flex flex-col justify-start items-center gap-4 mt-5"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder={"First Name"}
            type={"text"}
            value={formData.firstname}
            onChage={handleChange}
          />
          <Input
            placeholder={"Last Name"}
            type={"text"}
            value={formData.lastname}
          />
          <Input placeholder={"Email"} type={"email"} value={formData.email} />
          <Input
            placeholder={"Password"}
            type={"password"}
            value={formData.password}
          />
          <Input
            placeholder={"Confirm Password"}
            type={"password"}
            value={formData.confirmPassword}
          />
          <Button className="  w-60 !lg:w-96 mt-4 mb-5">Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
