import React from 'react'
import './cover.css'
function Cover() {
  return (
    <div className='background  text-white lg:h-[600px] sm:h-96 h-80 mt-10 relative'>
        <div className='absolute md:top-1/2 top-32 left-14'>
        <h1 className='lg:text-5xl sm:text-3xl text-2xl'>Unleash Deliciousness, Without Breaking the Bank.</h1>
        <button className=' mt-6 bg-black py-2 px-4 w-fit '>See Menu</button>
        </div>
    </div>
  )
}

export default Cover