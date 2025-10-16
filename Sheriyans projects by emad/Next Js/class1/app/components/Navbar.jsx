import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex mb-10 text-xl justify-between items-center px-9 py-4 bg-zinc-600 text-white'>
        <h3>NEXT JS</h3>
        <div className='flex gap-8'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </div>

    </div>
  )
}

export default Navbar