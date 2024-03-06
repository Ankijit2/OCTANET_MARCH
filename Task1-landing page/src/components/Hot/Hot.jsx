import React from 'react'
import data from '../../assets/data.js'
import Hotitem from './Hotitems.jsx';

function Hot() {
  return (
    <>
      <h1 className='text-3xl mt-10 font-bold mb-5 ml-10'>OUR HOT PICKS</h1>
      <div className='grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2  place-items-center'>
        {data.map((item, index) => {
          return <Hotitem key={index} {...item} />;
        })}
      </div>
      <button className='text-white text-center mt-6 block bg-black py-2 px-4 m-auto'>View More</button>
    </>
  )
}

export default Hot