import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className='flex justify-center gap-10 py-4'>
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/about">About</Link>
        </nav> 
  )
}

export default Nav