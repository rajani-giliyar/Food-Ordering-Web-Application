import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import "./AddingFoodItems.css";
import { useNavigate } from "react-router-dom";

const AddingFoodItems = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    restaurant: "",
    image: "",
    name: "",
    quantity: 0,
    price: 0,
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/dish/add", formData);
      alert("Food item added successfully");
      // Clear form after successful submission
      setFormData({
        restaurant: "",
        image: "",
        name: "",
        quantity: 0,
        price: 0,
        description: "",
      });
      navigate("/home");
    } catch (error) {
      console.error("Error adding food item:", error);
      alert("Failed to add food item. Please try again.");
    }
  };

  return (
    <div className="main">
      <h2>Add Food Item</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="restaurant">Restaurant:</label>
            <input
              type="text"
              id="restaurant"
              name="restaurant"
              value={formData.restaurant}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Add Food Item</button>
        </form>
        <div className="viewlink">
          <Link to="/viewfooditem">View Food Items</Link>
        </div>
      </div>
    </div>
  );
};

export default AddingFoodItems;
