import React from 'react'
import BootsData from '../../../data/BootsData'
import ProductCategoryCard from '../../../components/ProductCategoryCards'
const Boots = () => {
  return (
    <div className='px-20  pt-20 '>
      <div className=' flex flex-wrap gap-10'>
        {BootsData?.map((product,index)=>(
          <ProductCategoryCard product={product} img={product.img} title={product.title} prevPrice={product.prevPrice} />
        ))}
      </div>
    </div>
  )
}

export default Boots