// AddProduct.jsx

import React, { useState } from "react";
import "../styles/addAdmin.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [categoryId, setCategoryId] = useState("");
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("");
  const [stock, setStock] = useState("");
  const [error, setError] = useState(null);

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("categoryId", categoryId);
      formData.append("productName", productName);
      formData.append("image", productImage);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("gender", gender);
      formData.append("stock", stock);

      const response = await axios.post(
        "https://minifashion-backend.onrender.com/products/addProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setCategoryId("");
      setProductName("");
      setProductImage(null);
      setDescription("");
      setPrice("");
      setGender("");
      setStock("");
      toast.success("Product Added Successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error Adding Product:", error);
      toast.error("Error Adding Product. Please try again.");
      setError(error.response.data.message);
    }
  };

  return (
    <div className="addProduct">
      <ToastContainer />
      <form
        onSubmit={handleAddProduct}
        className="addAdminForm"
        encType="multipart/form-data"
      >
        {error && <p className="error-message">{error}</p>}
        <div className="h1AddAdmin">
          <h1 className="titleDashboard">Add Product</h1>
        </div>
        <div className="contentForm">
          <input
            className="fullNameAddAdmin"
            type="text"
            required
            value={categoryId}
            placeholder="Enter Category ID"
            onChange={(e) => setCategoryId(e.target.value)}
          />
          <input
            className="emailAddAdmin"
            required
            value={productName}
            type="text"
            placeholder="Enter Product Name"
            onChange={(e) => setProductName(e.target.value)}
          />
          <input
            className="emailAddAdmin"
            required
            type="file"
            accept="image/*"
            onChange={(e) => setProductImage(e.target.files[0])}
          />
          <textarea
            className="descriptionAddProduct"
            required
            value={description}
            placeholder="Enter Product Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="confirmPasswordAddAdmin"
            type="text"
            required
            value={price}
            placeholder="Enter Product Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            className="confirmPasswordAddAdmin"
            type="text"
            required
            value={gender}
            placeholder="Enter Product Gender"
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            className="phoneNumberAddAdmin"
            type="text"
            required
            value={stock}
            placeholder="Enter Product Stock"
            onChange={(e) => setStock(e.target.value)}
          />
          <button className="AddAdminButton">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
