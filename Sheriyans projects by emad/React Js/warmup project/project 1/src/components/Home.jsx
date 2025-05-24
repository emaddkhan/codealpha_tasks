import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import { productData } from "../utils/Context.jsx";
import Loading from "./Loading.jsx";
import axios from "../utils/axios.jsx";

function Home() {
  const [product, setProducts] = useContext(productData);
  const { search } = useLocation();
  const category = search.split("=")[1];
  console.log(category);
  const[filteredProducts,setFilteredProducts]= useState(product)
  const getCategoryProducts =async () => {
    try {
      const {data} =await axios.get(`products/category?type=${category}`)
      console.log(data.products)
      setFilteredProducts(data.products)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    if(category) getCategoryProducts();
  },[category])
  console.log(filteredProducts)
  return product ? (
    <>
      <Navbar />
      <div className="w-[85%] h-screen p-5 flex flex-wrap gap-2 overflow-x-hidden overflow-y-auto">
        {filteredProducts &&filteredProducts.map((items) => (
          <Link
            key={items.id}
            to={`/details/${items.id}`}
            className="w-[18%] h-[35vh] border rounded-md shadow p-2"
          >
            <div className="w-full h-[65%] rounded-md overflow-hidden">
              <img
                src={items.image}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <p className="text-center leading-none mt-5 hover:text-blue-300 cursor-pointer">
              {items.title}
            </p>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
