import React, { useState } from 'react'
import Cards from './Components/Cards'
import Form from './Components/Form'

function App() {
  const [users,setUsers]= useState([]);
  const formSubmitHandler=(data)=>{
    setUsers([...users,data])
    console.log(users)
  }
      const removeHandler=(id)=>{
        setUsers(()=>{
          return users.filter((item,index)=>{
            return index!=id
          })
        })
    }
  return (
    <div className='w-full h-screen flex justify-center items-center bg-zinc-200'>
      <div className='container mx-auto'>
        <Cards removeHandler={removeHandler} users={users}/>
        <Form formSubmitHandler={formSubmitHandler}/>
      </div>
    </div>
  )
}

export default App

//form handling ka aik issue ye hai k jb aap form submit krte ho toh web reload hojati hai or react ka main focus hai k web reload nah ho
//iske liye hamare pass basically teen tareka hai
//--useRef
//--controlled components
//--react hook form

// useRef--is tareeke se hum hr input ko select krdete hain hain or uski value tb nikalte hain jb form submit krte hain

//--Controlled Components
//ap jb bhi kuch likhein useState k zaria ap data real time pr update krdein
//jaise hi kuch type ho setStaet krdo new value k barabar

//--Reack hook form aik package hai or usse installed krna parhta hai
// npm install react-hook-form
//-now i make the generation of card