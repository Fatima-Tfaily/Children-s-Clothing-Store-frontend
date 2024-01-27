import React, { useState } from "react";
import "../styles/addCategory.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [error, setError] = useState(null);

  const handleAddCategory = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("categoryName", categoryName);
      formData.append("image", categoryImage);

      const response = await axios.post(
        "https://minifashion-backend.onrender.com/categories/addCategory",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setCategoryName("");
      setCategoryImage(null);
      toast.success("Category Added Successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error Adding Category:", error);

      const errorMessage = error.response?.data?.message || "Unknown error";

      toast.error(`Error Adding Category: ${errorMessage}`);
      setError(errorMessage);
    }
  };

  return (
    <div className="addCategory">
      <ToastContainer />
      <form
        onSubmit={handleAddCategory}
        className="addCategoryForm"
        encType="multipart/form-data"
      >
        {error && <p className="error-message">{error}</p>}
        <div className="h1AddCategory">
          <h1 className="titleDashboard">Add Category</h1>
        </div>
        <div className="contentForm">
          <input
            className="categoryName"
            required
            value={categoryName}
            type="text"
            placeholder="Enter Category Name"
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <input
            className="categoryImage"
            required
            type="file"
            accept="image/*"
            onChange={(e) => setCategoryImage(e.target.files[0])}
          />
          <button className="AddCategoryButton">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
