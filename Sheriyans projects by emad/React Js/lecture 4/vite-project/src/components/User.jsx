import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/Context'
import UserDetail from './UserDetail';

function User() {
  const {user,setUser} = useContext(UserContext);
  return (
    <div className='w-1/2 mx-auto mt-10'>
      <div className='w-full flex flex-col'>
        {user.map((items,index)=>(
          <Link to={`/user/${items.id}`} key={index} className="p-5 pr-[45%] rounded-lg mt-2 bg-red-200">{items.name}</Link>
        ))}
      </div>
      
    </div>
  )
}

export default User