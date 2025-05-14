import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetail() {
  const {name}=useParams()
  const navigate = useNavigate()
  const backHandler=()=>{
    // navigate("/user")
    navigate(-1)
  }
  return (
    <div className='w-1/2 p-3 m-auto mt-10'>
        <h1 className='text-3xl text-red-300 mb-3'>User Detail</h1>
        <h3 className='text-2xl my-3'>{name}</h3>
        <button onClick={backHandler} className='px-3 py-2 text-white bg-zinc-500 rounded-lg'>Explore More</button>
    </div>
  )
}

export default UserDetail