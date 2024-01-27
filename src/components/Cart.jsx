import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/cart.css";
import Modal from "react-modal";
import Cookies from "js-cookie";
import Header from "./Header";
import Footer from "./Footer";
import Delete from "../images/icons8-delete-24.png";

const Cart = () => {
  const userId = Cookies.get("userId");
  const [cartItems, setCartItems] = useState([]);
  const [productsQuantity, setProductsQuantity] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [orderResponse, setOrderResponse] = useState(null);
  const handleDeleteProduct = (productId) => {
    axios
      .delete(
        `https://minifashion-backend.onrender.com/carts/delete/${productId}`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          window.alert("Product deleted successfully!");
          fetchCartItems();
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
      if (!userId) {
        setLoggedIn(false);
        return;
      }
      const response = await axios.get(
        `https://minifashion-backend.onrender.com/carts/getCartsByUserId/${userId}`
      );
      const fetchedCartItems = response.data;
      const productsDetailsPromises = fetchedCartItems.map(async (item) => {
        const productDetailsResponse = await axios.get(
          `https://minifashion-backend.onrender.com/products/getProductById/${item.products[0].productId}`
        );
        return productDetailsResponse.data;
      });

      const productsDetails = await Promise.all(productsDetailsPromises);

      const productsDetailsMap = productsDetails.reduce(
        (acc, product, index) => {
          const productId = fetchedCartItems[index].products[0].productId;
          acc[productId] = product;
          return acc;
        },
        {}
      );

      const updatedCartItems = fetchedCartItems.reduce((acc, item) => {
        //console.log(productsQuantity[item.products[0].productId][0]);
        const productId = item.products[0].productId;
        const existingItem = acc.find(
          (cartItem) => cartItem.products[0].productId === productId
        );

        if (existingItem) {
          existingItem.products[0].quantity += 1;
        } else {
          acc.push(item);
        }

        return acc;
      }, []);

      setProductsQuantity(productsDetailsMap);
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  const handleCheckout = async () => {
    try {
      if (!userId) {
        setLoggedIn(false);
        return;
      }

      const orderProducts = cartItems.map((item) => ({
        product: item.products[0].productId,
        quantity: item.products[0].quantity,
        price: item.products[0].price,
      }));

      const totalPrice = cartItems.reduce(
        (total, item) =>
          total + item.products[0].quantity * item.products[0].price,
        0
      );

      const orderData = {
        user: userId,
        products: orderProducts,
        totalPrice: totalPrice,
      };

      const response = await axios.post(
        "https://minifashion-backend.onrender.com/orders/add",
        orderData
      );

      setOrderResponse(response);
      if (response.status === 201) {
        window.alert("Order placed successfully!");
        setIsModalOpen(true);
      } else {
        window.alert("Error placing the order. Please try again.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  const handleOrder = async () => {
    try {
      if (cartItems.length === 0) {
        window.alert("No product in the cart. Please shop now.");
        return;
      }

      const orderId = orderResponse.data._id;
      await axios.delete(
        `https://minifashion-backend.onrender.com/carts/deleteByUserId/${userId}`
      );
      await axios.put(
        `https://minifashion-backend.onrender.com/orders/update/${orderId}`,
        {
          address: address,
        }
      );

      setIsModalOpen(false);

      window.alert("Order placed successfully!");
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="mainboxcart">
        <h1>
          <span className="h1Blues">My Shopping Cart</span>
        </h1>
        <div id="cart-items">
          {loggedIn ? (
            cartItems.length > 0 ? (
              <table className="cartable">
                <thead>
                  <tr>
                    <th className="thBluesName">Product Name</th>
                    <th className="thBluesImage">Product Image</th>
                    <th className="thBluesDescription">Description</th>
                    <th className="thBluesQuantity">Quantity</th>
                    <th className="thBluesPrice">Price</th>
                    <th className="thBluesPrice">Total Price</th>
                    <th className="thBluesRemove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="blues">
                        {productsQuantity[item.products[0].productId] &&
                          productsQuantity[item.products[0].productId][0]
                            ?.productName}
                      </td>
                      <td className="blues">
                        <img
                          src={
                            productsQuantity[item.products[0].productId] &&
                            productsQuantity[item.products[0].productId][0]
                              ?.productImage
                          }
                          alt="product"
                        />
                      </td>
                      <td className="bluesDescription">
                        {productsQuantity[item.products[0].productId] &&
                          productsQuantity[item.products[0].productId][0]
                            ?.description}
                      </td>
                      <td className="blues">{item.products[0].quantity}</td>
                      <td className="blues">${item.products[0].price}</td>
                      <td className="blues">
                        ${item.products[0].quantity * item.products[0].price}
                      </td>
                      <td className="blues">
                        <button
                          className="delete"
                          onClick={() => handleDeleteProduct(item._id)}
                        >
                          <img className="imgDelete" src={Delete} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="totalPrice" colSpan="2">
                      <div className="totalp">
                        Total Price: $
                        {cartItems.reduce((total, item) => {
                          return (
                            total +
                            item.products[0].quantity * item.products[0].price
                          );
                        }, 0)}
                      </div>
                    </td>
                    <td className="totalPrice">
                      <button className="checkout" onClick={handleCheckout}>
                        Checkout
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            ) : (
              <p className="messageLogin">
                No product in your cart. Please{" "}
                <a href="/AllProducts">shop now.</a>
              </p>
            )
          ) : (
            <div className="messageLogin">
              Please log in to view your cart.
              <a className="aLogin" href="/Login">
                Login
              </a>
            </div>
          )}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            textAlign: "center",
          },
          content: {
            width: "60%",
            margin: "auto",
            textAlign: "center",
          },
        }}
      >
        {cartItems.length > 0 ? (
          <>
            <h2 className="h2Modal">
              Your Order is for {orderResponse?.data?.totalPrice}$
            </h2>
            <div className="divModal">
              <label className="labelModal">
                Please enter your address:
                <input
                  className="inputModal"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>
              <br />
              <button className="buttonModal" onClick={handleOrder}>
                Order
              </button>
            </div>
          </>
        ) : (
          <p>
            No product in the cart. Please<a href="/AllProducts"> shop now.</a>
          </p>
        )}
      </Modal>
      <Footer />
    </div>
  );
};

export default Cart;
