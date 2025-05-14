import React from 'react'
import { Link, useParams } from 'react-router-dom'

function User() {
  return (
    <div className='w-1/2 p-3 m-auto mt-10'>
        <h1 className='text-3xl text-red-300 mb-3'>Users</h1>
        <div className='flex flex-col mt-4'>
          <Link className='hover:bg-red-300 p-3 bg-red-200 w-1/2 my-1' to="/user/john">John</Link>
          <Link className='hover:bg-red-300 p-3 bg-red-200 w-1/2 my-1' to="/user/emad">Emad</Link>
          <Link className='hover:bg-red-300 p-3 bg-red-200 w-1/2 my-1' to="/user/aamir">Aamir</Link>
        </div>
    </div>
  )
}

export default User