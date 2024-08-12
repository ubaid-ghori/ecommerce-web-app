import React from 'react'
import SportsData from '../../../data/SportsData'
import ProductCard from '../../../components/ProductCard'
const Sports = () => {
  return (
    <div className='px-20 pt-20 '>
      <div className='flex flex-wrap gap-10'>
        {SportsData?.map((product,index)=>(
          <ProductCard product={product} img={product.img} title={product.title} prevPrice={product.prevPrice} />
        ))}
      </div>
    </div>
  )
}

export default Sports