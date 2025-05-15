import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();
        const backHandler=()=>{
        navigate(-1)
      }
  return (
    <>
     <div className='w-1/2 mx-auto mt-10'>
        <h1 className='font-bold text-red-300 text-3xl'>About</h1>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates culpa doloremque officiis possimus reiciendis fuga, iusto, molestiae labore saepe laudantium repudiandae, quisquam ratione magni voluptas omnis necessitatibus ducimus aspernatur accusantium esse ipsa? Numquam eum, dolorum tempora accusantium, enim suscipit, vero ad ipsum dolor temporibus veniam laborum fugiat repellat sed harum labore fugit possimus? Qui totam, deleniti velit sit veniam illo? Quia quis eos perferendis totam magnam ab voluptatibus sed.</p>
        <button onClick={backHandler} className='bg-red-300 text-white px-3 py-2 rounded-md'>Go back</button>
     </div>
    </>
  )
}

export default About