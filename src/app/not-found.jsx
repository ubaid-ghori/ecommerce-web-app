import React from 'react'
import Button from './components/Button'
import Link from 'next/link'
const NotFound = () => {
  return (
    <div className='pt-20 '>
        <h2 className=' text-bgColor text-9xl opacity-25 font-bold font-body text-center '>404</h2>
        <p className='text-center font-heading font-semibold text-5xl p-2'>The Page you're looking for can't found</p>
        <div className='flex justify-center items-center mt-10'>
        <Button>
            <Link href='/'>Back To Home</Link>
        </Button>
        </div>
    </div>
  )
}

export default NotFound