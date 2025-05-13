import React, { useRef } from 'react'

function App() {
  const name =useRef(null);
  const age =useRef(null);
  const email =useRef(null);
  const handleSubmit=(e)=>{
    e.preventDefault();
  console.log(name.current.value,age.current.value,email.current.value)

  }
  return (
    <div className='p-4'>
      <form action="" onSubmit={handleSubmit}>
        <input ref={name} type="text" placeholder='name' />
        <input ref={age} type="text" placeholder='age' />
        <input ref={email} type="text" placeholder='email' />
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