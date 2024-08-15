import React from 'react'
import SportsData from '../../../data/SportsData'
import ProductCategoryCard from '../../../components/ProductCategoryCards'
const Sports = () => {
  return (
    <div className='px-20 pt-20 '>
      <div className='flex flex-wrap gap-10'>
        {SportsData?.map((product,index)=>(
          <ProductCategoryCard product={product} img={product.img } title={product.title} prevPrice={product.prevPrice} />
        ))}
      </div>
    </div>
  )
}

export default Sports