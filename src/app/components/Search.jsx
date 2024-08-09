import React from 'react'

const Search = () => {
  return (
    <div>
        <div className='flex relative'>
            <input type="text" placeholder='Search' className=' px-2 text-sm bg-slate-200 rounded-full p-2 w-full h-12' />
            <div className=' absolute flex justify-center items-center right-0  h-12 w-12 rounded-full bg-hover p-2 text-white cursor-pointer'>
            <Search  size={20} />
            </div>
          </div>
    </div>
  )
}

export default Search