import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { productData } from "../utils/Context.jsx";

function Home() {
  const [product, setProducts] = useContext(productData);
  return (
    <>
      <Navbar />
      <div className="w-[85%] h-screen p-5 flex flex-wrap gap-2 overflow-x-hidden overflow-y-auto">
        {product.map((items, index) => {
          return (
            <Link
              to="/details/1"
              className="w-[18%] h-[30vh] border rounded-md shadow p-3"
            >
              <div
                key={index}
                className="w-full h-[80%] bg-cover bg-center rounded-md transition-transform hover:scale-105"
                style={{
                  backgroundImage: `url(${items.image})`,
                }}
              ></div>
              <h3 className="text-center mt-2 hover:text-blue-300 cursor-pointer">
                {items.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Home;
