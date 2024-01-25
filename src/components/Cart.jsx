import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/cart.css";
import Cookies from "js-cookie";
import Header from "./Header";
import Footer from "./Footer";

const Cart = () => {
  const userId = Cookies.get("userId");
  const [cartItems, setCartItems] = useState([]);
  const [productsQuantity, setProductsQuantity] = useState({});
  const handleDeleteProduct = (productId) => {
    axios
      .delete(
        `https://minifashion-backend.onrender.com/carts/delete/${productId}`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          window.alert("Product deleted successfully!");
          fetchCartItems(); // Refresh the cart items after deletion
        } else {
          window.alert("Product couldn't be deleted!");
        }
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        `https://minifashion-backend.onrender.com/carts/getCartsByUserId/${userId}`
      );
      const fetchedCartItems = response.data.products;

      const groupedItems = fetchedCartItems.reduce(
        (accumulator, currentItem) => {
          const { productId, quantity } = currentItem;
          if (!accumulator[productId]) {
            accumulator[productId] = 0;
          }
          accumulator[productId] += quantity;
          return accumulator;
        },
        {}
      );

      setProductsQuantity(groupedItems);

      const uniqueItems = fetchedCartItems.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.productId === item.productId)
      );
      console.log("Response data:", response.data);
      setCartItems(uniqueItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const calculateTotalPrice = (quantity, price) => {
    return quantity * price;
  };

  return (
    <div>
      <Header />
      <div className="mainboxcart">
        <h1>
          <span className="h1Blues">Your Shopping Cart</span>
        </h1>
        <div id="cart-items">
          <table className="cartable">
            <thead>
              <tr>
                <th className="blues">Product Name</th>
                <th className="blues">Quantity</th>
                <th className="blues">Price</th>
                <th className="blues">Total Price</th>
                <th className="blues">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  {/* Assuming you have another endpoint to fetch product details */}
                  <td className="blues">
                    {/* Fetch and display product name based on item.productId */}
                  </td>
                  <td className="blues">{productsQuantity[item.productId]}</td>
                  <td className="blues">{item.price}</td>
                  <td className="blues">
                    $
                    {calculateTotalPrice(
                      productsQuantity[item.productId],
                      item.price
                    )}
                  </td>
                  <td className="blues">
                    <button
                      className="delete"
                      onClick={() => handleDeleteProduct(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="totalPrice">
                  <div className="totalp">
                    Total Price: $
                    {cartItems.reduce((total, item) => {
                      const itemQuantity =
                        productsQuantity[item.productId] || 0;
                      return (
                        total + calculateTotalPrice(itemQuantity, item.price)
                      );
                    }, 0)}
                  </div>
                </td>
                <td className="totalPrice">
                  <button className="checkout">Checkout</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
