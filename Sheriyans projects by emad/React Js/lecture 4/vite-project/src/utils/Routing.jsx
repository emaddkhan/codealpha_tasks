import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import User from '../components/User'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/user/:id' element={<User/>} />
        </Routes>
    </div>
  )
}

export default Routing