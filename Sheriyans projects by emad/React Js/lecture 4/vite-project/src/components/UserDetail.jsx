import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/Context'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetail() {
  const navigate=useNavigate();
  const BackHandler=()=>{
    navigate(-1)
  }
  const {id}=useParams()
  const {user}=useContext(UserContext)
  return (
    <div className='w-1/2 mx-auto mt-10'>
      <h1 className='text-4xl text-red-400 font-semibold'>{user[id].name}</h1>
      <h1 className='text-2xl text-red-300 font-semibold'>{user[id].place}</h1>
      <button onClick={BackHandler} className='px-3 py-2 bg-red-500 rounded-md text-white mt-4'>Go Back</button>
    </div>
  )
}

export default UserDetail