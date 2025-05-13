import React from 'react'
import { useForm } from 'react-hook-form'

function Form({formSubmitHandler}) {
    const {register,handleSubmit,reset}=useForm();
    const formHandler =(data)=>{
        formSubmitHandler(data);
        reset();
    }

  return (
    <div className='flex justify-center mt-4'>
        <form action="" className='flex gap-4' onSubmit={handleSubmit(formHandler)}>
            <input {...register('name')} className='px-3 py-1 outline-none font-semibold rounded-md' type="name" placeholder='Nmae' />
            <input {...register('email')} className='px-3 py-1 outline-none font-semibold rounded-md'  type="email" placeholder='Email' />
            <input {...register('description')} className='px-3 py-1 outline-none font-semibold rounded-md'  type="text" placeholder='Description' />
            <input {...register('img')} className='px-3 py-1 outline-none font-semibold rounded-md'  type="text" placeholder='Image Url' />
            <input className='px-5 py-1 font-semibold text-white bg-blue-600 rounded-md ' type="Submit"/>
        </form>
    </div>
  )
}

export default Form