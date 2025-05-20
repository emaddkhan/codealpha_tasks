import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import User from '../components/User'
import UserDetail from '../components/UserDetail'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/userdetail' element={<UserDetail/>}/>
        </Routes>
    </div>
  )
}

export default Routing