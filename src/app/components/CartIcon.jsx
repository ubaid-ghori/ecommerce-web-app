import React from 'react'
import { ShoppingCart } from 'lucide-react'
const CartIcon = ({className,}) => {
  return (
    <div>
 <div className={`bg-[#4C3BCF] rounded-full p-2 text-white cursor-pointer ${className} `}>
            <ShoppingCart size={25} />
          </div>
    </div>
  )
}

export default CartIcon