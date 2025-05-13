import React, { use } from 'react'

function Card({user,removeHandler,id}) {
  return (
    <div className='h-full w-60 rounded-lg flex flex-col items-center bg-zinc-100 p-2'>
        <div className='h-[3vw] w-[3vw] rounded-full bg-zinc-200 overflow-hidden'>
            <img className='h-full w-full object-cover' src={user.img} alt="" />
        </div>
        <h3 className='font-semibold text-xl mt-1'>{user.name}</h3>
        <h3 className='opacity-55 font-semibold'>{user.email}</h3>
        <p className='text-center leading-none tracking-tight font-semibold mt-1'>{user.description}</p>
        <button onClick={()=>removeHandler(id)} className='px-3 py-1 bg-red-500 text-white font-semibold rounded-md mt-4'>Remove it</button>
    </div>
  )
}

export default Card