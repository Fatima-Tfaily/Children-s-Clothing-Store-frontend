// EditProduct.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { productId } = useParams();
  const history = useNavigate();
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: 0,
    // Add other properties as needed
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/products/getProductById/${productId}`
        );
        // Set the initial state with the fetched data
        setProduct(response.data);
        console.log("Fetched Product Data:", response.data);
      } catch (error) {
        console.error("Error fetching Product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(
        `http://localhost:8000/products/update/${productId}`,
        product
      );
      history.push("/products"); // Redirect to the product list page after a successful update
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <form>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        {/* Add other form fields for additional properties */}
        <div>
          <button type="button" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
