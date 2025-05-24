import React, { useContext } from "react";
import { productData } from "../utils/Context";
import { Link } from "react-router-dom";

function Navbar() {
  const [product, setProducts] = useContext(productData);
  let distinctProducts =
    product && product.reduce((acc, cv) => [...acc, cv.category], []);
  distinctProducts = [...new Set(distinctProducts)];
  // console.log(distinctProducts);
  const color = () => {
  return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},0.4)`
}

//  console.log(color())
  return (
    <div className="h-screen flex flex-col items-center py-5 w-[15%] px-5 bg-zinc-100">
      <button className="px-5 py-3 border">Add New Category</button>
      <hr className="w-[90%] bg-zinc-300 h-[2px] my-5" />
      <h1 className="w-full font-semibold text-2xl">Category Filter</h1>
      <ul className="w-full mt-3">
        {distinctProducts.map((c,index)=>{
          return(
            <Link key={index} to={`/?category=${c}`}>
          <li className="text-xl flex items-center gap-2 mt-3 leading-none">
            <span style={{
              backgroundColor:color(),
            }} className="h-[15px] w-[15px] rounded-full mt-[3px]"></span>
            {c}
          </li>
        </Link>
          )
        })}
        
      </ul>
    </div>
  );
}

export default Navbar;
