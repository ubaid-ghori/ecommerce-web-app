import React from 'react'
import FormalData from '../../../data/FormalData'
import ProductCard from '../../../components/ProductCard'
const Formal = () => {
  return (
    <div className='px-20  pt-20 '>
      <div className=' '>
        {FormalData?.map((product,index)=>(
          <ProductCard product={product} img={product.img} title={product.title} prevPrice={product.prevPrice} />
        ))}
      </div>
    </div>
  )
}

export default Formal