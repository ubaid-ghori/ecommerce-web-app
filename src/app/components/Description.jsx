import React from 'react'

const Description = ({children,className}) => {
  return (
    <div>
      <p className={`text-md font-body pt-4 max-w-lg  leading-6 text-desc font-semibold text-center mx-auto ${className}`}>
  {children}
</p>

    </div>
  )
}

export default Description