import React, { useEffect, useState } from "react";
import "../styles/user.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Delete from "../images/icons8-delete-24.png";
import "react-toastify/dist/ReactToastify.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://minifashion-backend.onrender.com/users/getUsers"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching Users:", error);
        setError("Error fetching Users. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(
        `https://minifashion-backend.onrender.com/users/deleteUser/${userId}`
      );
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.userId !== userId)
      );
      toast.success("User Deleted Successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error deleting user. Please try again.");
    }
  };

  return (
    <div className="allUsersDashboard">
      <h1 className="titleDashboard">All Users</h1>
      <ToastContainer />
      <table className="UsersDashboard">
        <thead>
          <tr className="trUsers">
            <th className="thUsers">Full Name</th>
            <th className="thUsers">Email</th>
            <th className="thUsers">Password</th>
            <th className="thUsers">Phone Number</th>
            <th className="thUsers">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, userIndex) => (
            <tr className="trUsers" key={user._id}>
              <td className="tdUsers">{user.fullName}</td>
              <td className="tdUsers">
                <p className="p-userDashboard">{user.email}</p>
              </td>
              <td className="tdUsers">
                <p className="p-userDashboard">*****</p>
              </td>
              <td className="tdUsers">
                <p className="p-userDashboard">{user.phoneNumber}</p>
              </td>
              <td className="tdUsers">
                <img
                  className="imgDeleteDashboard"
                  src={Delete}
                  alt="pic"
                  onClick={() => handleDelete(user._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
