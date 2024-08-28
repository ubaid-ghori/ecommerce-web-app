"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { ProductCategoryData } from "../data/ProductCategoryData";
import { useRouter } from "next/navigation";

const SearchInput = ({ className }) => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  function handleSearchClick(e) {
    if (searchValue?.trim() !== "") {
      e.preventDefault();
      const searchItem = ProductCategoryData.filter((item) =>
        item?.name?.toLowerCase().includes(searchValue.toLowerCase())
      );
      router.push(searchItem[0]?.link);
      setSearchValue("");
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
