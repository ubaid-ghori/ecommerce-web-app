import React from 'react'

const Input = ({placeholder,type,className}) => {
  return (
    <div>
        <input type={type} className={` bg-white text-md text-[#CCCCCC] rounded-full w-96 border border-[#CCCCCC] max-w-xs md:max-w-sm p-3 h-12  `} placeholder={placeholder} />
    </div>
  )
}

export default Input