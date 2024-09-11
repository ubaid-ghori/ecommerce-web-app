"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({ placeholder, type, name, value, onChange, error, className }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputType = type === "password" && !isPasswordVisible ? "password" : "text";

  return (
    <div className="relative w-full lg:max-w-sm">
      <input
        type={inputType}
        name={name}
        value={value}
        onChange={onChange}
        className={`bg-white text-md lg:text-md text-gray-700 rounded-full w-full border ${
          error ? "border-red-500" : "border-gray-300"
        } p-3 h-12 focus:outline-none focus:ring-2 focus:ring-hover ${className}`}
        placeholder={placeholder}
      />
      {type === "password" && (
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? (
            <Eye className="w-5 h-5 text-gray-500" />
          ) : (
            <EyeOff className="w-5 h-5 text-gray-500" />
          )}
        </div>
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
