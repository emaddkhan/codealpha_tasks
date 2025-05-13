import React, { useRef, useState } from 'react'

function App() {
  const [val,setVal]=useState({name:""});
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(val)
  }
  return (
    <div className='p-4'>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setVal({...val,name:e.target.value})} placeholder='name' />
        <input type="text" onChange={(e)=>setVal({...val,age:e.target.value})} placeholder='age' />
        <input type="submit" />
      </form>
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