import React from 'react'
import data from './data/productdata'
import Image from 'next/image'
const products = () => {
  return (
    <div>
        <div>
      {data?.map((product, index) => (
        <div key={index}>
          <img src={product.img} alt={product.title} width={200} height={200} />
          <h2>{product.title}</h2>
          <p>{product.newPrice}</p> {/* Use newPrice instead of price */}
          <p>{product.reviews}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default products