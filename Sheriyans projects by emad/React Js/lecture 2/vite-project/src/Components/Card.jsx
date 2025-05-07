import React from 'react'

function Card() {
  return (
    <div className='w-full h-screen bg-zinc-200'>
      <div className='w-52 bg-zinc-100 absolute left-1/2 top-1/2 -translate-y-[50%] -translate-x-[50%] rounded-md overflow-hidden'>
      <div className='w-full h-32 bg-zinc-300'>
        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9ufGVufDB8fDB8fHww" alt="" />
      </div>
      <div className='w-full px-3 py-4'>
        <h1 className='font-semibold'>Amazon Basics.</h1>
        <p className='text-xs mt-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem sit id!</p>
      </div>
      </div>
    </div>
  )
}

export default Card