import React from 'react'

const Button = ({children,className,onClick,type}) => {
  return (
    <div>
        <button type={type} className={` text-lg p-2 w-72 h-12 bg-bgColor rounded-full text-white font-semibold font-heading   ${className} `} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button