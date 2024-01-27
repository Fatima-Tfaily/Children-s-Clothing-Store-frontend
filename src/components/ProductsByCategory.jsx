import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "../styles/allProduct.css";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";

function ProductsByCategory() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null); // Define selectedProduct
  const [quantity, setQuantity] = useState(1); // Define quantity
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(
          `https://minifashion-backend.onrender.com/products/getProductsByCategoryId/${categoryId}`
        );
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching Products:", error);
        setError("Error fetching Products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [categoryId]);
  const userId = Cookies.get("userId"); // Get userId from the cookie

  const addToCart = async (productId) => {
    try {
      if (!userId) {
        toast.error("Please login to add a product to the cart.");
        navigate("/login");
        return;
      }
      if (
        !selectedProduct ||
        !selectedProduct.price ||
        isNaN(selectedProduct.price)
      ) {
        console.error("Invalid product or product price");
        return;
      }
      const response = await axios.post(
        "https://minifashion-backend.onrender.com/carts/add",
        {
          userId,
          products: [
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
      toast.error("Error adding product to cart. Please try again.");
    }
  };

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
  };

  useEffect(() => {
    if (selectedProduct) {
      addToCart(selectedProduct._id);
    }
  }, [selectedProduct]);

  return (
    <div className="allProducts">
      <Header />
      <ToastContainer />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div className="Products">
          {products.map((product) => (
            <div className="product" key={product.productId}>
              <img
                className="imgProduct"
                src={product.productImage}
                alt="pic"
              />
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
      )}
      <Footer />
    </div>
  );
}

export default ProductsByCategory;
