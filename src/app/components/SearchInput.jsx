"use client";
import { Clock, Search, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ProductCategoryData } from "../data/ProductCategoryData";
import { useRouter } from "next/navigation";

const SearchInput = ({ className }) => {
  const [searchValue, setSearchValue] = useState("");
  const [list, setList] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const router = useRouter();


  function handleSearchClick(e) {
    e.preventDefault();

    if (searchValue.trim() !== "") {
      const updatedList = [...list, searchValue];
      setList(updatedList);

      const searchItem = ProductCategoryData.filter((item) =>
        item?.name?.toLowerCase().includes(searchValue.toLowerCase())
      );

      if (searchItem.length > 0) {
        router.push(searchItem[0].link);
      }
      setSearchValue("");
      setIsInputFocused(false); 
    } else {
      console.log("Please enter a valid search term");
    }
  }

  return (
    <div>
      <form className="flex relative" onSubmit={handleSearchClick}>
        <input
          type="text"
          placeholder="Search"
          className="px-2 text-sm bg-slate-200 rounded-full p-2 lg:w-72 w-full h-12"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
        {isInputFocused && list.length > 0 && (
          <div className="absolute bg-gray-50 h-60 w-full z-40 top-10 shadow-lg mt-2 rounded-xl">
            <div>
              {list.map((item, index) => (
                <div key={index} className="flex justify-between items-center pt-4 p-2 bg-gray-200 hover:bg-gray-400 cursor-pointer border-b-2 border-gray-500">
                  <Clock />
                  <p className="text-Text font-heading text-lg mx-2 flex-1"
                  onClick={()=>router.push((searchItem[0].link))}
                  >{item}</p>
                  <X />
                </div>
              ))}
            </div>
          </div>
        )}
        <button
          type="submit"
          className="absolute flex justify-center items-center right-0 h-12 w-12 rounded-full bg-hover p-2 text-white cursor-pointer"
        >
          <Search size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
