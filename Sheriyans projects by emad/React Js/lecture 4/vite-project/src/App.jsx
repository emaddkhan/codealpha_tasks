import axios from "axios";
import React from "react";

function App() {
  const api = "https://fakestoreapi.com/products";
  const getProducts = () => {
    axios.get(api)
    .then(data=>{
      console.log(data)
    })
  };
  const addProducts = () => {
    axios.post(api,{
    title: "Emads Iphone",
    brand: "Apple",
    model: "Apple vision pro First Gen",
     color: "Black",
    category: "appliances",
    discount: 1
  })
    .then(data=>{
      console.log(data)
    })
  };
  return (
    <>
    <div className="p-5">
    <button onClick={getProducts} className="px-4 py-1 rounded-md bg-red-300 text-white">Get Products</button>
    <br /><br />
    <button onClick={addProducts} className="px-4 py-1 rounded-md bg-red-300 text-white">Add New Products</button>

    </div>
    </>
  )
}

export default App;
