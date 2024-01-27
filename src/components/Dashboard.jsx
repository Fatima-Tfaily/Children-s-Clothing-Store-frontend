import React from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import "../styles/dashboard.css";
import Users from "./Users";
import Products from "./Products";
import Orders from "./Orders";
import Admins from "./Admins";
import AddAdmins from "./AddAdmins";
import Logout from "./Logout";
import AddProduct from "./AddProduct";
import Cookies from "js-cookie";

const ProtectedRoute = ({ element }) => {
  const authToken = Cookies.get("authToken");
  const role = Cookies.get("role");

  if (!authToken || role !== "admin") {
    // Redirect to the home page if no valid cookie or role is not admin
    return <Navigate to="/" />;
  }

  return <div>{element}</div>;
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <nav className="navDashboard">
        <h1 className="titleDashboard">Admin Dashboard</h1>
        <ul className="ulDashboard">
          <li className="liDashboard">
            <Link to="/dashboard/orders">Orders</Link>
          </li>
          <li className="liDashboard">
            <Link to="/dashboard/users">Users</Link>
          </li>
          <li className="liDashboard">
            <Link to="">Products</Link>
          </li>
          <li className="liDashboard">
            <Link to="addProduct">Add Product</Link>
          </li>
          <li className="liDashboard">
            <Link to="admins">Admins</Link>
          </li>
          <li className="liDashboard">
            <Link to="addAdmins">Add Admins</Link>
          </li>
          <li className="liDashboard">
            <Link to="logout">Logout</Link>
          </li>
        </ul>
      </nav>
      <div className="contentDashboard">
        <Routes>
          <Route
            path="orders"
            element={<ProtectedRoute element={<Orders />} />}
          />
          <Route
            path="users"
            element={<ProtectedRoute element={<Users />} />}
          />
          <Route path="" element={<ProtectedRoute element={<Products />} />} />
          <Route
            path="admins"
            element={<ProtectedRoute element={<Admins />} />}
          />
          <Route
            path="addAdmins"
            element={<ProtectedRoute element={<AddAdmins />} />}
          />
          <Route
            path="logout"
            element={<ProtectedRoute element={<Logout />} />}
          />
          <Route
            path="addProduct"
            element={<ProtectedRoute element={<AddProduct />} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
