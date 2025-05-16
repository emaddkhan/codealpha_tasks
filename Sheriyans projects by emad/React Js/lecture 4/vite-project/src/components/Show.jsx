import axios from "axios";
import React, { useEffect, useState } from "react";

function Show() {
    
  const [products, setProducts] = useState([]);

  const api = "https://fakestoreapi.com/products";
  const getProducts = () => {
    axios
      .get(api)

      .then((data) => {
        setProducts(data.data);
      });
  };
  useEffect(()=>{
        getProducts()
    })
  return (
    <>
      <button
        
        className="px-4 py-1 rounded-md bg-red-300 text-white"
      >
        Get Products
      </button>
      <br />
      <br />

      <hr />
      <ul className="w-1/3 mt-10">
        {products.length > 0 ? (
          products.map((items, index) => {
            return (
              <li key={index} className="bg-red-200 rounded p-5 my-2 ">
                {items.title}
              </li>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </>
  );
}

export default Show;
