import React from 'react'

function Card({values,clickHandler,index}) {
  const {img,name,profession,friend} =values;
  return (
    <div className='w-60 bg-zinc-50 overflow-hidden rounded-md m-1'>
      <div className='img h-44 bg-sky-200'>
        <img className='h-full w-full object-cover object-[center_center]' src={img} alt="" />
      </div>
      <div className='py-3 px-2'>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h5 className='text-xs'>{profession}</h5>
        <button onClick={()=>clickHandler(index)} className='mt-4 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-md'>{friend?"Remove Friend":"Add Friend"}</button>
      </div>
    </div>
  )
}

export default Card