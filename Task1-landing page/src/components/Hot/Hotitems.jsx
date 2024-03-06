import React from 'react'

function Hotitem(item) {
  return (
    <div className='p-8 hover:bg-orange-300 hover:text-white flex flex-col items-center'>
        <img src={item.url} alt=""  className=''/>
        <h1 className='md:text-lg text-base font-light text-center'>{item.name}</h1>
        <p className=' font-bold'>{item.price}</p>
    </div>
  )
}

export default Hotitem