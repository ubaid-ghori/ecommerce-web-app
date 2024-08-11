import React from 'react'
import LoafersData from '../../../data/LoafersData'
import ProductCard from '../../../components/ProductCard'
const Loafers = () => {
  return (
    <div className='px-20  pt-20 '>
      <div className=' '>
        {LoafersData?.map((product,index)=>(
          <ProductCard product={product} img={product.img} title={product.title} prevPrice={product.prevPrice} />
        ))}
      </div>
    </div>
  )
}

export default Loafers