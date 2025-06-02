import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productData } from "../utils/Context";
import { toast } from "react-toastify";

function EditePage() {
  const navigate = useNavigate();
  const [product, setProducts] = useContext(productData);
  const [editProduct, setEditProduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const existing = product.find((p) => p.id == id);
    if (existing) {
      setEditProduct(existing);
    }
  }, [id, product]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEditProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditProduct((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addProductHandler = (e) => {
    e.preventDefault();

    const { title, category, price, image, description } = editProduct;

    if (
      !title?.trim() || title.trim().length < 5 ||
      !category?.trim() || category.trim().length < 2 ||
      !String(price).trim() || String(price).trim().length < 1 ||
      !image?.trim() || image.trim().length < 5 ||
      !description?.trim() || description.trim().length < 5
    ) {
      alert("Each and every field must contain more than 5 letters!");
      return;
    }

    const productIndex = product.findIndex((p) => p.id == id);
    const copyData = [...product];
    copyData[productIndex] = { ...product[productIndex], ...editProduct };

    setProducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    toast.success("Product edited successfully");
    navigate(-1);
  };

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <div className="w-[70%] mx-auto h-screen py-20">
      <div className="container w-full h-full p-5 flex flex-col justify-center">
        <h1 className="text-3xl ml-[10%] font-semibold">Edit Product</h1>
        <form onSubmit={addProductHandler} className="flex flex-col items-center">
          <input
            type="text"
            value={editProduct.title}
            onChange={changeHandler}
            name="title"
            placeholder="Title"
            className="w-[80%] bg-zinc-200 p-3 rounded mt-5"
          />

          {/* Image Picker */}
          <div className="w-[80%] mt-4 flex flex-col items-start">
            <label className="mb-2 font-semibold">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-2"
            />
            {editProduct.image && (
              <img
                src={editProduct.image}
                alt="Preview"
                className="w-40 h-40 object-cover mx-auto rounded border"
              />
            )}
          </div>

          <div className="flex justify-between w-[80%] mt-4">
            <input
              type="text"
              name="category"
              value={editProduct.category}
              onChange={changeHandler}
              placeholder="Category"
              className="w-[48%] bg-zinc-200 p-3 rounded"
            />
            <input
              type="number"
              name="price"
              value={editProduct.price}
              onChange={changeHandler}
              placeholder="Price"
              className="w-[51.2%] bg-zinc-200 p-3 rounded"
            />
          </div>

          <textarea
            className="w-[80%] mt-2 p-2 bg-zinc-200 text-xl"
            value={editProduct.description}
            onChange={changeHandler}
            placeholder="Enter product description here..."
            rows={8}
            name="description"
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
