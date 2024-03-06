import React from 'react'

function Slogan() {
  return (
    <div className='relative lg:ml-10 grid lg:grid-cols-[1fr,3fr] place-items-center '>
      <div id="slogantxt" className='flex flex-col justify-center lg:order-none order-2'>
        <div className='bg-orange-400 text-white p-16 lg:absolute left-0 lg:w-2/4 md:w-screen sm:w-auto'>
          <div className=''>
            <h1 className='md:text-5xl sm:text-3xl text-2xl md:my-8 sm:my-4 my-2 font-bold'>The Comfort Kitchen</h1>
            <p>Comforting Classics, Exciting New Flavors.
              Order Online, Experience Food Nirvana in Every Bite.</p>
          </div>
          <button className=' mt-6  bg-black py-2 px-4 w-fit'>Order Now</button>
        </div>
      </div>
      <div id="img" className=''><img src="./background.png" alt="" className='lg:w-[98%]' /></div>
    </div>
  )
}

export default Slogan