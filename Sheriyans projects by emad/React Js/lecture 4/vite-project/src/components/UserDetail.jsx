import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetail() {
    const {name}=useParams()
    const navigate = useNavigate();
    const backHandler=()=>{
    navigate(-1)
  }
  return (
    <div className='mt-10'>
        <h1 className='text-3xl text-red-300 mb-5'>Hi {name}</h1>
        <button onClick={backHandler} className='bg-red-300 px-3 py-1 rounded-md text-white font-semibold'>Go Back</button>
    </div>
  )
}

export default UserDetail