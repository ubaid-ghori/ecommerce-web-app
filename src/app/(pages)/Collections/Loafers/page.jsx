import React from 'react'
import LoafersData from '../../../data/LoafersData'
import ProductCategoryCard from '../../../components/ProductCategoryCards'
const Loafers = () => {
  return (
    <div className='px-20  pt-20 '>
      <div className='flex flex-wrap justify-center items-start gap-10'>
        {LoafersData?.map((product,index)=>(
          <ProductCategoryCard product={product} img={product.img} title={product.title} prevPrice={product.prevPrice} />
        ))}
      </div>
    </div>
  )
}

export default Loafers