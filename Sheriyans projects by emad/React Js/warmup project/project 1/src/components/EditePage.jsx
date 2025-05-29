import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { productData } from "../utils/Context";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
function EditePage() {
  const navigate = useNavigate();

  const [product, setProducts] = useContext(productData);
  const [editProduct, setEditProduct] = useState({
    title: "",
    url: "",
    category: "",
    price: "",
    description: "",
  });
  const { id } = useParams();
  const addProductHandler = (e) => {
    e.preventDefault();
    if (
      !editProduct?.title?.trim() ||
      editProduct.title.trim().length < 5 ||
      !editProduct?.category?.trim() ||
      editProduct.category.trim().length < 2 ||
      !String(editProduct.price).trim() ||
      String(editProduct.price).trim().length < 1 ||
      !editProduct?.image?.trim() ||
      editProduct.image.trim().length < 5 ||
      !editProduct?.description?.trim() ||
      editProduct.description.trim().length < 5
    ) {
      alert("Each and every must contain more then 5 letters!");
      return;
    }
    const productIndex=product.findIndex((p) => p.id == id)
    const copyData=[...product]
    copyData[productIndex]={...product[productIndex],...editProduct}
    // const products = {
    //   id: nanoid(),
    //   title,
    //   price,
    //   category,
    //   image: url,
    //   description,
    // };
    // console.log(product);
    setProducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    navigate(-1);
        toast.success("Product edited successfully")
    
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEditProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const backHandler = () => {
    navigate(-1);
  };
  useEffect(() => {
    setEditProduct(product.filter((p) => p.id == id)[0]);
  }, [id]);
  // console.log(editProduct);
  return (
    <div className="w-[70%] mx-auto h-screen py-20">
      <div className="container w-full h-full  p-5 flex flex-col justify-center">
        <h1 className="text-3xl ml-[10%] font-semibold">Edit Product</h1>
        <form
          action=""
          onSubmit={addProductHandler}
          className="flex flex-col items-center "
        >
          <input
            type="text"
            value={editProduct && editProduct.title}
            onChange={changeHandler}
            name="title"
            placeholder="Title"
            className="w-[80%] bg-zinc-200 p-3 rounded mt-5"
          />
          <input
            type="url"
            value={editProduct && editProduct.image}
            onChange={changeHandler}
            name="image"
            placeholder="Image URL"
            className="w-[80%] bg-zinc-200   p-3 rounded my-2"
          />

          {/* <input
            type="url"
            value={editProduct && editProduct.url}
            onChange={changeHandler}
            name="url"
            placeholder="Url"
            className="w-[80%] bg-zinc-200   p-3 rounded my-2" */}
          {/* /> */}
          <div className="flex justify-between w-[80%] ">
            <input
              type="text"
              name="category"
              value={editProduct && editProduct.category}
              onChange={changeHandler}
              placeholder="Category"
              className="w-[48%] bg-zinc-200   p-3 rounded "
            />
            <input
              type="number"
              name="price"
              value={editProduct && editProduct.price}
              onChange={changeHandler}
              placeholder="Price"
              className="w-[51.2%]  bg-zinc-200  p-3 rounded "
            />
          </div>
          <textarea
            className="w-[80%] mt-2 p-2 bg-zinc-200  text-xl"
            value={editProduct && editProduct.description}
            onChange={changeHandler}
            placeholder="Enter product description here..."
            rows={8}
            name="description"
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
              Edit Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditePage;
