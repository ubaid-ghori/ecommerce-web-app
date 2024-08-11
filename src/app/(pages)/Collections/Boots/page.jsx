import React from 'react'
import BootsData from '../../../data/BootsData'
import ProductCard from '../../../components/ProductCard'
const Boots = () => {
  return (
    <div className='px-20  pt-20 '>
      <div className=' '>
        {BootsData?.map((product,index)=>(
          <ProductCard product={product} img={product.img} title={product.title} prevPrice={product.prevPrice} />
        ))}
      </div>
    </div>
  )
}

export default Boots