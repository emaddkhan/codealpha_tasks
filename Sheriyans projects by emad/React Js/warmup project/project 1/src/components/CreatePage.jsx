import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreatePage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="w-[70%] mx-auto h-screen py-20">
      <div className="container w-full h-full  p-5 flex flex-col justify-center">
        <h1 className="text-3xl ml-[10%] font-semibold">Add New Product</h1>
        <form action="" className="flex flex-col items-center ">
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
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter product description here..."
            rows={8}
            name=""
            id=""
          ></textarea>
        </form>
        <div className="w-[90%] py-2 flex justify-end">
          <button className="px-5 bg-blue-400 text-white rounded-md font-semibold py-3 border">
            Add New Category
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
