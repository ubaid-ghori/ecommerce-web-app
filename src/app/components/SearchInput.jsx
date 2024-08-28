"use client";
import { Clock, Search, X } from "lucide-react";
import React, { useState } from "react";
import { ProductCategoryData } from "../data/ProductCategoryData";
import { useRouter } from "next/navigation";

const SearchInput = ({ className }) => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  function handleSearchClick(e) {
    e.preventDefault();

    if (searchValue.trim() !== "") {
      const searchItem = ProductCategoryData.filter((item) =>
        item?.name?.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log(searchValue)

      if (searchItem.length > 0) {
        router.push(searchItem[0].link);
      } 
      setSearchValue("");
      return;
    } else {
      alert("Please enter a valid search term");
    }
  }

  return (
    <div>
      <form className="flex relative">
        <input
          type="text"
          placeholder="Search"
          className="px-2 text-sm bg-slate-200 rounded-full p-2 lg:w-72 w-full h-12"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
         {/* <div className=" absolute bg-gray-50 h-60 w-full top-10 shadow-lg mt-2 rounded-xl  ">
          <div className=" px-4 pt-4 flex items-center justify-between bg-gray-100 p-2 cursor-pointer ">
            <Clock />
            <div className=" flex-1 mx-2">
              {
                searchValue.map((item)=>{
                  <li>{item}</li>
                })
              }
            </div>
            <X />
          </div>
      </div> */}
        <button
          type="submit"
          className="absolute flex justify-center items-center right-0 h-12 w-12 rounded-full bg-hover p-2 text-white cursor-pointer"
          onClick={handleSearchClick}
        >
          <Search size={20} />
        </button>
      </form>
     
    </div>
  );
};

export default SearchInput;
