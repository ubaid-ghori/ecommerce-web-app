"use client";
import Input from "../../../components/Input";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../../../components/Button";
import * as yup from "yup";

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = yup.object({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validateForm.validate(formData, { abortEarly: false });
      console.log("Form Submitted", formData);
      setErrors({});
    } catch (err) {
      const errorMessages = {};
      err.inner.forEach((error) => {
        errorMessages[error.path] = error.message;
      });
      setErrors(errorMessages);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
          className="flex flex-col justify-start items-center gap-4 mt-5"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="First Name"
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            error={errors.firstname}
          />
          <Input
            placeholder="Last Name"
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            error={errors.lastname}
          />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <Input
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />
          <Button className="w-60 lg:w-96 mt-4 mb-5" type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
