import React from 'react'

const Heading = ({className,children}) => {
  return (
    <div >
        <h1 className={` text-4xl font-heading text-Text text-center font-semibold leading-10 ${className}`}>
            {children}
        </h1>
    </div>
  )
}

export default Heading