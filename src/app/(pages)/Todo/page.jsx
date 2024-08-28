"use client";
import React, { useState } from "react";

const Todos = () => {
  const [text, setText] = useState("");
  const [List, setList] = useState([]);

  const AddToDo = () => {
    if (text.trim()) {
      setList([...List, text]);
      setText(""); 
    }
  };

  const updated=(index)=>{
    const updatedlist=List[index]
    setText(updatedlist)

  }
  return (
    <div className="px-20 pt-20">
      <div className="flex justify-center items-center">
      <input
        type="text"
        placeholder="enter a todos"
        className="border p-2 text-black bg-gray-400 rounded-lg"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        className="mx-2 bg-gray-800 p-2 text-white w-32 rounded-lg"
        onClick={AddToDo}
      >
        Submit
      </button>
      
    </div>
     <ul className=" flex flex-col justify-center items-center mt-10  ">
     {List.map((item, index) => (
       <li className=" text-xl font-semibold mt-5 " key={index}>{item}
       <button className=" bg-gray-800 p-2 text-white w-32 rounded-lg" 
      onClick={()=>updated(index)} >Updated</button>
       <button className=" mx-4 bg-gray-700 p-2 w-32 rounded-md text-white">Delete</button>
       </li> 
     ))}
   </ul>
    </div>
  );
};

export default Todos;
