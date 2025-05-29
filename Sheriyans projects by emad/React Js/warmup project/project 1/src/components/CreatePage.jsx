import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { productData } from "../utils/Context";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

function CreatePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const [product, setProducts] = useContext(productData);
  const addProductHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length < 5 ||
      category.trim().length < 2 ||
      price.trim().length < 1 ||
      url.trim().length < 5 ||
      description.trim().length < 5
    ) {
      alert("Each and every must contain more then 5 letters!");
      return;
    }
    const products = {
      id: nanoid(),
      title,
      price,
      category,
      image: url,
      description,
    };
    console.log(product);
    setProducts([...product, products]);
    localStorage.setItem("products",JSON.stringify([...product, products]))
    toast.success("Product added successfully")
    navigate("/");
  };

  const backHandler = () => {
    navigate(-1);
  };
  return (
    <div className="w-[70%] mx-auto h-screen py-20">
      <div className="container w-full h-full  p-5 flex flex-col justify-center">
        <h1 className="text-3xl ml-[10%] font-semibold">Add New Product</h1>
        <form
          action=""
          onSubmit={addProductHandler}
          className="flex flex-col items-center "
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-[80%] bg-zinc-200 p-3 rounded mt-5"
          />
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Url"
            className="w-[80%] bg-zinc-200   p-3 rounded my-2"
          />
          <div className="flex justify-between w-[80%] ">
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
              className="w-[48%] bg-zinc-200   p-3 rounded "
            />
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-[51.2%]  bg-zinc-200  p-3 rounded "
            />
          </div>
          <textarea
            className="w-[80%] mt-2 p-2 bg-zinc-200  text-xl"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter product description here..."
            rows={8}
            name=""
            id=""
          ></textarea>
          <div className="w-[80%] py-2 flex justify-between">
            <button
              type="button"
              onClick={backHandler}
              className="px-5 bg-red-400 text-white rounded-md font-semibold py-3 border"
            >
              Back
            </button>

            <button
              type="submit"
              className="px-5 bg-blue-400 text-white rounded-md font-semibold py-3 border"
            >
              Add New Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePage;
