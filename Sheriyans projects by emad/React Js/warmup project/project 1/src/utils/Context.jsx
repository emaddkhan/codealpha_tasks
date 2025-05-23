import axios from './axios';
import React, { createContext, useEffect, useState } from 'react'


export const productData = createContext();
function Context(props) {
    const [product,setProducts]=useState([]);
    const getProducts=async()=>{
        try{
            const {data}=await axios("/products");
            console.log(data.products)
            setProducts(data.products)
        }
        catch{
            console.log(Error);
            
        }
    }
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <productData.Provider value={[product,setProducts]}>{props.children}</productData.Provider>
  )
}

export default Context