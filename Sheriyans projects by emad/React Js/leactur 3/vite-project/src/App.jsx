import React from 'react'

function App() {
  return (
    <div className='p-4'>
      <form action="">
        <input className='border ' type="text" placeholder='name' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App

//form handling ka aik issue ye hai k jb aap form submit krte ho toh web reload hojati hai or react ka main focus hai k web reload nah ho
