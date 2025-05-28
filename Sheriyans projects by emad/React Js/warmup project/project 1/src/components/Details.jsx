import { useNavigate, useParams } from 'react-router-dom'
import axios from '../utils/axios'
import React, { useContext, useEffect, useState } from 'react'
import Loading from './Loading'
import { IoIosArrowBack } from "react-icons/io"
import { productData } from '../utils/Context'

function Details() {
    const navigate = useNavigate()
    const [singleProducts, setSingleProducts] = useState(null)
    const { id } = useParams()
    const [product,setProduct] = useContext(productData)

    useEffect(() => {
        if (product && id) {
            const foundProduct = product.find(p => p.id.toString() === id)
            setSingleProducts(foundProduct)
            console.log(foundProduct)
        }
    }, [product, id])

    const backHandler = () => navigate(-1)
    const deletHandler=()=>{
        const newFilteredProducts=product.filter(e=>e.id!==id);
        setProduct(newFilteredProducts);
        localStorage.setItem("products",JSON.stringify(newFilteredProducts))
        navigate(-1)
    }

    return singleProducts ? (
        <div className='w-full h-screen flex justify-center'>
            <div className='w-[80%] justify-between p-[7%] flex'>
                <IoIosArrowBack onClick={backHandler} className="h-10 w-10 absolute cursor-pointer" />
                <div className='imageDiv w-[45%] h-full'>
                    <img className='w-full h-full object-cover' src={singleProducts.image} alt="" />
                </div>
                <div className='content w-[50%] h-full flex flex-col justify-center'>
                    <h1 className='text-3xl font-semibold'>{singleProducts.title}</h1>
                    <h3 className='my-2 opacity-[.6] hover:opacity-[.8]'>{singleProducts.category}</h3>
                    <h3 className='font-semibold text-red-300 text-xl my-3'>$ {singleProducts.price}</h3>
                    <p className='mb-5 text-[21px] font-medium leading-7'>{singleProducts.description}</p>
                    <div>
                        <button className="px-8 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition-all duration-200">Edit</button>
                        <button onClick={(()=>deletHandler(product.id))} className="px-8 ml-5 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded transition-all duration-200">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    ) : (<Loading />)
}

export default Details
