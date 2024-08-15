import React from 'react'
import FormalData from '../../../data/FormalData'
import ProductCategoryCard from '../../../components/ProductCategoryCards'
const Formal = () => {
  return (
    <div className='px-20 pt-20 '>
      <div className='flex flex-wrap gap-10 justify-center items-center '>
        {FormalData?.map((product,index)=>(
          <ProductCategoryCard product={product} img={product.img} title={product.title} prevPrice={product.prevPrice} />
        ))}
      </div>
    </div>
  )
}

export default Formal