import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='flex gap-10 justify-center p-5 border-b-2'>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
    </div>
  )
}

export default Nav