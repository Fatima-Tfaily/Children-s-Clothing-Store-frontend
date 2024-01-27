import React, { useEffect, useState } from "react";
import "../styles/product.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Delete from "../images/icons8-delete-24.png";
import Edit from "../images/icons8-edit-64.png";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Categories from "./Categories";

const Categoriess = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://minifashion-backend.onrender.com/categories/getAll"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching Products:", error);
        setError("Error fetching Products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleDelete = async (categoryId) => {
    try {
      await axios.delete(
        `https://minifashion-backend.onrender.com/categories/deleteCategory/${categoryId}`
      );
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category.categoryId !== categoryId)
      );
      toast.success("Category Deleted Successfully!");
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.error("Error deleting category. Please try again.");
    }
  };

  return (
    <div className="allCategoriesDashboard">
      <h1 className="titleDashboard">All Categories</h1>
      <ToastContainer />
      <div className="CategoriesDashboard">
        {categories.map((category, index) => (
          <div className="categoryDashboard" key={category._id}>
            <img
              className="imgCategoryDashboard"
              src={category.categoryImage}
              alt="pic"
            />
            <h2 className="h2-categoryDashboard">{category.categoryName}</h2>
            <div className="iconsCategoryDashboard">
              <div className="deleteDivDashboard">
                <img
                  className="imgCartDashboard"
                  src={Delete}
                  alt="pic"
                  onClick={() => handleDelete(category.categoryId)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categoriess;
