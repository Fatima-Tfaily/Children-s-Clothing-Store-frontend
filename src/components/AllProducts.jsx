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
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const userId = Cookies.get("userId");

  const addToCart = async (productId, productPrice) => {
    try {
      if (!userId) {
        toast.error("Please login to add a product to the cart.");
        navigate("/login");
        return;
      }

      if (!productPrice || isNaN(productPrice)) {
        console.error("Invalid product price", productPrice);
        toast.error("Invalid product price. Please try again.");
        return;
      }

      const response = await axios.post(
        "https://minifashion-backend.onrender.com/carts/add",
        {
          userId,
          products: [
            {
              productId: productId,
              quantity,
              price: productPrice,
            },
          ],
          totalPrice: productPrice * quantity,
        }
      );

      console.log("Add to Cart Response:", response);
      toast.success("Product Added to cart !");

      setQuantity(1);
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Error adding product to cart. Please try again.");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://minifashion-backend.onrender.com/products/getAllProducts"
        );
        console.log("API Response:", response.data);
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
        {products.map(
          (product, index) => (
            console.log(product._id),
            (
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
                      onClick={() => addToCart(product._id, product.price)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
