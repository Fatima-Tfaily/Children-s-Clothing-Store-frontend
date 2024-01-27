import React, { useEffect, useState } from "react";
import "../styles/product.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Delete from "../images/icons8-delete-24.png";
import Edit from "../images/icons8-edit-64.png";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://minifashion-backend.onrender.com/products/getAllProducts"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching Products:", error);
        setError("Error fetching Products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(
        `https://minifashion-backend.onrender.com/products/delete/${productId}`
      );
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.productId !== productId)
      );
      toast.success("Product Deleted Successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error deleting product. Please try again.");
    }
  };

  return (
    <div className="allProductsDashboard">
      <h1 className="titleDashboard">All Products</h1>
      <ToastContainer />
      <div className="ProductsDashboard">
        {products.map((product, index) => (
          <div className="productDashboard" key={product.productId}>
            <img
              className="imgProductDashboard"
              src={product.productImage}
              alt="pic"
            />
            <h2 className="h2-productDashboard">{product.productName}</h2>
            <p className="product-descriptionDashboard">
              {product.description}
            </p>
            <h2 className="price-productDashboard">{product.price}$</h2>
            <div className="iconsProductDashboard">
              <div className="deleteDivDashboard">
                <img
                  className="imgCartDashboard"
                  src={Delete}
                  alt="pic"
                  onClick={() => handleDelete(product.productId)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
