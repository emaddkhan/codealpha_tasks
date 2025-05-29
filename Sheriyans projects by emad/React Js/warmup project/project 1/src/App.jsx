import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Details from './components/Details'
import CreatePage from './components/CreatePage'
import EditePage from './components/EditePage'

function App() {
  return (
    <div className='flex'>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/edit/:id' element={<EditePage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
      </Routes>
    </div>
  )
}

export default App