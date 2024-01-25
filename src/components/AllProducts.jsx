import React, { useEffect, useState } from "react";
import "../styles/allProduct.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "../images/icons8-shopping-bag-50.png";
import Favorite from "../images/icons8-favorite-50.png";

const AllProducts = () => {
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
  return (
    <div className="allProducts">
      <Header />
      <div className="Products">
        {products.map((product, index) => (
          <div className="product" key={product.productId}>
            <img className="imgProduct" src={product.productImage} alt="pic" />
            <h2 className="h2-product">{product.productName}</h2>
            <p className="product-description">{product.description}</p>
            <h2 className="price-product">{product.price}$</h2>
            <div className="iconsProduct">
              <div className="cartDiv">
                <img className="imgCart" src={Cart} alt="pic" />
              </div>
              <div className="favoriteDiv">
                <img className="imgFavorite" src={Favorite} alt="pic" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;