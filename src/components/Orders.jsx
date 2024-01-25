import React, { useEffect, useState } from "react";
import "../styles/order.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Delete from "../images/icons8-delete-24.png";
import "react-toastify/dist/ReactToastify.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://minifashion-backend.onrender.com/orders/getAllOrders"
        );
        console.log(response.data);

        const orderPromises = response.data.map(async (order) => {
          const userResponse = await axios.get(
            `https://minifashion-backend.onrender.com/users/getById/${order.user}`
          );

          // Assuming each order has multiple products
          const productPromises = order.products.map(async (product) => {
            const productResponse = await axios.get(
              `https://minifashion-backend.onrender.com/products/getProductById/${product.product}`
            );
            return {
              ...productResponse.data,
              quantity: product.quantity,
              price: product.price,
            };
          });

          const products = await Promise.all(productPromises);

          return { ...order, user: userResponse.data, products };
        });

        // Wait for all promises to resolve
        const populatedOrders = await Promise.all(orderPromises);
        setOrders(populatedOrders);
      } catch (error) {
        console.error("Error fetching Orders:", error);
        setError("Error fetching Orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (orderId) => {
    try {
      await axios.delete(
        `https://minifashion-backend.onrender.com/orders/delete/${orderId}`
      );
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order._id !== orderId)
      );
      toast.success("Order Deleted Successfully!");
    } catch (error) {
      console.error("Error deleting order:", error);
      toast.error("Error deleting order. Please try again.");
    }
  };

  return (
    <div className="allOrdersDashboard">
      <h1 className="titleDashboard">All Orders</h1>
      <ToastContainer />
      <table className="OrdersDashboard">
        <thead>
          <tr className="trOrders">
            <th className="thOrders">User Name</th>
            <th className="thOrders">Product Image</th>
            <th className="thOrders">Product Name</th>
            <th className="thOrders">Quantity</th>
            <th className="thOrders">Price</th>
            <th className="thOrders">Total Price</th>
            <th className="thOrders">Delete</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, orderIndex) => (
            <React.Fragment key={order._id}>
              {order.products.map((product, productIndex) => (
                <tr key={`${orderIndex}-${productIndex}`} className="trOrder">
                  {productIndex === 0 && (
                    <td rowSpan={order.products.length} className="tdOrders">
                      {order.user.fullName}
                    </td>
                  )}
                  <td className="tdOrders">
                    <img
                      className="imgOrderDashboard"
                      src={product.productImage}
                      alt="pic"
                    />
                  </td>
                  <td className="tdOrders">
                    <p className="p-productDashboard">{product.productName}</p>
                  </td>
                  <td className="tdOrders">
                    <p className="p-productDashboard">{product.quantity}</p>
                  </td>
                  <td className="tdOrders">
                    <p className="p-productDashboard">{product.price}</p>
                  </td>
                  {productIndex === 0 && (
                    <td rowSpan={order.products.length} className="tdOrders">
                      <p>{order.totalPrice}</p>
                    </td>
                  )}
                  {productIndex === 0 && (
                    <td rowSpan={order.products.length} className="tdOrders">
                      <img
                        className="imgDeleteDashboard"
                        src={Delete}
                        alt="pic"
                        onClick={() => handleDelete(order._id)}
                      />
                    </td>
                  )}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
