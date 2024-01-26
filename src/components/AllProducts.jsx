import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import Header from "./Header";
import Footer from "./Footer";
import "react-toastify/dist/ReactToastify.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null); // Define selectedProduct
  const [quantity, setQuantity] = useState(1); // Define quantity
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const userId = Cookies.get("userId"); // Get userId from the cookie

  const addToCart = async (productId) => {
    try {
      if (!selectedProduct || !selectedProduct.price) {
        console.error("Invalid product or product price");
        return;
      }

      const response = await axios.post(
        "https://minifashion-backend.onrender.com/carts/add",
        {
          userId,
          products: [
            // Wrap the product object in an array
            {
              productId,
              quantity,
              price: selectedProduct.price,
            },
          ],
          totalPrice: selectedProduct.price * quantity,
        }
      );

      console.log("Add to Cart Response:", response);
      toast.success("Product Added to cart !");

      setSelectedProduct(null);
      setQuantity(1);
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Error Added Product to Cart. Please try again.");
    }
  };

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    addToCart(product.productId);
  };

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
      <ToastContainer />
      <div className="Products">
        {products.map((product, index) => (
          <div className="product" key={product.productId}>
            <img className="imgProduct" src={product.productImage} alt="pic" />
            <h2 className="h2-product">{product.productName}</h2>
            <p className="product-description">{product.description}</p>
            <h2 className="price-product">{product.price}$</h2>
            <div className="iconsProduct">
              <div className="cartDiv">
                <button
                  className="buttonCart"
                  onClick={() => handleAddToCart(product)}
                >
                  Add To Cart
                </button>
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
