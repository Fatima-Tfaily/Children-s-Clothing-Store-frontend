import React, { useEffect, useState } from "react";
import "../styles/user.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Delete from "../images/icons8-delete-24.png";
import "react-toastify/dist/ReactToastify.css";

const Admins = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get(
          "https://minifashion-backend.onrender.com/users/getAdmin"
        );
        setAdmins(response.data);
      } catch (error) {
        console.error("Error fetching Admins:", error);
        setError("Error fetching Admins. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAdmins();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(
        `https://minifashion-backend.onrender.com/users/deleteUser/${userId}`
      );
      setAdmins((prevAdmins) =>
        prevAdmins.filter((admin) => admin.userId !== userId)
      );
      toast.success("Admin Deleted Successfully!");
    } catch (error) {
      console.error("Error deleting admin:", error);
      toast.error("Error deleting admin. Please try again.");
    }
  };

  return (
    <div className="allUsersDashboard">
      <h1 className="titleDashboard">All Admins</h1>
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
          {admins.map((admin, adminIndex) => (
            <tr className="trUsers" key={admin._id}>
              <td className="tdUsers">{admin.fullName}</td>
              <td className="tdUsers">
                <p className="p-userDashboard">{admin.email}</p>
              </td>
              <td className="tdUsers">
                <p className="p-userDashboard">*****</p>
              </td>
              <td className="tdUsers">
                <p className="p-userDashboard">{admin.phoneNumber}</p>
              </td>
              <td className="tdUsers">
                <img
                  className="imgDeleteDashboard"
                  src={Delete}
                  alt="pic"
                  onClick={() => handleDelete(admin._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admins;
