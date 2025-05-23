import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { productData } from "../utils/Context.jsx";
import Loading from "./Loading.jsx";

function Home() {
  const [product, setProducts] = useContext(productData);
  return product ? (
    <>
      <Navbar />
      <div className="w-[85%] h-screen p-5 flex flex-wrap gap-2 overflow-x-hidden overflow-y-auto">
        {product.map((items) => (
  <Link
    key={items.id}
    to={`/details/${items.id}`}
    className="w-[18%] h-[35vh] border rounded-md shadow p-3"
  >
    <div className="w-full h-[65%] rounded-md overflow-hidden">
      <img
        src={items.image}
       
        className="w-full h-full object-cover transition-transform hover:scale-105"
      />
    </div>
    <p className="text-center leading-none mt-5 hover:text-blue-300 cursor-pointer">{items.title}</p>
  </Link>
))}

      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
