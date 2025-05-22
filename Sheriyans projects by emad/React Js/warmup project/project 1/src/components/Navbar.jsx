import React from 'react'

function Navbar() {
  return (
    <div className='h-screen flex flex-col items-center py-5 w-[15%] px-5 bg-zinc-100'>
        <button className='px-5 py-3 border'>Add New Category</button>
        <hr className='w-[90%] bg-zinc-300 h-[2px] my-5' />
        <h1 className='w-full font-semibold text-2xl'>Category Filter</h1>
        <ul className='w-full mt-3'>
            <li className='text-xl flex items-center gap-2 mt-3 leading-none'><span className='h-[15px] w-[15px] rounded-full mt-[3px] bg-blue-400'></span>cat 1</li>
            <li className='text-xl flex items-center gap-2 mt-3 leading-none'><span className='h-[15px] w-[15px] rounded-full mt-[3px] bg-green-400'></span>cat 2</li>
            <li className='text-xl flex items-center gap-2 mt-3 leading-none'><span className='h-[15px] w-[15px] rounded-full mt-[3px] bg-red-400'></span>cat 3</li>
        </ul>
    </div>
  )
}

export default Navbar