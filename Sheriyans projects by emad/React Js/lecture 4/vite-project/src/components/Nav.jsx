import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='flex justify-center p-5 gap-10'>
        <Link className='font-semibold' to="/">Home</Link>
        <Link className='font-semibold' to="/user">User</Link>
        <Link  className='font-semibold' to="/userdetail">User Details</Link>
        <Link  className='font-semibold' to="/about">About</Link>
    </div>
  )
}

export default Nav