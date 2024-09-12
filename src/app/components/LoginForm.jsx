"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Input from "./Input";
import Button from "./Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        console.error("Sign in error:", res.error);
        return;
      }

      router.replace("/dashboard");
    } catch (error) {
      console.error("Unexpected error:", error);
      setError("An unexpected error occurred");
    }
  };

  return (
    <div className="flex justify-center items-center px-4 mt-20 mb-20">
      <div className="bg-[#F0F0F0] p-6 shadow-md w-full max-w-md lg:max-w-xl">
        <h1 className="text-Text font-semibold text-3xl lg:text-4xl font-heading text-center py-4">
          Log In
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-start items-center gap-4 mt-5"
        >
          <Input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button className="w-60 lg:w-96 mt-4 mb-5">Sign In</Button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </form>
        <div className="text-Text cursor-pointer font-semibold font-body mt-3 flex justify-between items-center px-4 border-t pb-3 border-black pt-4">
          <p>Forgot Password</p>
          <p onClick={() => router.push("/account/SignUp")}>Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
