"use client";
import Input from "../../../components/Input";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../../../components/Button";
import * as yup from "yup";
const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await validateForm.validate(formData,{abortEarly:false});
      console.log("Form Submitted" , formData);
    }
    catch(err){
      console.log(err.inner);
    }
  };  

  const validateForm=yup.object({
    firstname:yup.string().required("First name is required"),
    lastname:yup.string().required("Last name is required"),
    email:yup.string().email("Invalid email").required("Email is required"),
    password:yup.string().min(8,"Password must be at least 6 characters").required("Password is required")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character")
    .matches(/^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, "Password must contain at least one special character")
    .matches(/^(?=.*[0-9]).{8,}$/, "Password must contain at least one number")
    .matches(/^(?=.*[a-z]).{8,}$/, "Password must contain at least one lowercase letter")
    .matches( /^(?=.*[A-Z]).{8,}$/, "Password must contain at least one uppercase letter")
    ,
    confirmPassword:yup.string().oneOf([yup.ref("password"), null], "Passwords must match")
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
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
            onChage={handleChange}
          />
          <Input placeholder={"Email"} type={"email"} value={formData.email} />
          <Input
            placeholder={"Password"}
            type={"password"}
            value={formData.password}
            onChage={handleChange}
          />
          <Input
            placeholder={"Confirm Password"}
            type={"password"}
            value={formData.confirmPassword}
            onChage={handleChange}
          />
          <Button className="  w-60 !lg:w-96 mt-4 mb-5" type='submit'>Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
