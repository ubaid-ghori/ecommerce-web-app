import React from 'react'
import { ShoppingCart } from 'lucide-react'
const CartIcon = ({className,onClick}) => {
  return (
    <div>
 <div className={`bg-[#4C3BCF] rounded-full p-2 text-white cursor-pointer ${className} `}
 onClick={onClick}
 >
            <ShoppingCart size={25}  />
          </div>
    </div>
  )
}

export default CartIcon