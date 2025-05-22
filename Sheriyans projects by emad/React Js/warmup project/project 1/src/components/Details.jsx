import React from 'react'

function Details() {
  return (
    <div className='w-full h-screen flex justify-center'>
        <div className='w-[80%] justify-between p-[10%] flex'>
            <div className='imageDiv w-[45%]  h-full'>
                <img className='w-full h-full object-cover' src="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg" alt="" />
            </div>
            <div className='content w-[50%] flex flex-col justify-center'>
                <h1 className='text-3xl font-semibold'>Microsoft Xbox X/S Wireless Controller Robot White</h1>
                <h3 className='my-2 opacity-[.6] hover:opacity-[.8] '>gaming</h3>
                <h3 className='font-semibold text-red-300 text-xl my-3'>$ 57</h3>
                <p className='mb-5 text-[21px] font-medium leading-7'>Experience the modernized design of the Xbox wireless controller in robot white, featuring sculpted surfaces and refined Geometry for enhanced comfort and effortless control during gameplay.\r\nStay on target with textured grip on the triggers, bumpers, and back case and with a new hybrid D-pad for accurate, yet familiar input.\r\nMake the controller your own by customizing button Mapping with the Xbox accessories app.</p>
                <div>
                    <button className="px-8 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition-all duration-200">Edit</button>
                    <button className="px-8 ml-5 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded transition-all duration-200">Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details