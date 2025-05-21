import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/Context'
import { useParams } from 'react-router-dom'

function UserDetail() {
  const {id}=useParams()
  const {user}=useContext(UserContext)
  return (
    <div className='w-1/2 mx-auto mt-10'>
      <h1>{user[id].name}</h1>
    </div>
  )
}

export default UserDetail