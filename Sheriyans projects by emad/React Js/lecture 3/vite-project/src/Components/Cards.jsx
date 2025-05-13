import React from 'react'
import Card from './card'

function Cards({users,removeHandler}) {
  return (
    <div className=' p-4 max-h-96 w-full flex justify-center flex-wrap overflow-auto gap-4 '>
        {users.map((item,index)=>{
            return <Card removeHandler={removeHandler} id={index} user={item} key={index}/>
        })}
    </div>
  )
}

export default Cards