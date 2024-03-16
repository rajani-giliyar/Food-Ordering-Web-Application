

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditFoodItemForm from './EditFoodItemForm'; 
import './ViewFoodItems.css';

const ViewFoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/dish/get');
        setFoodItems(response.data.data);
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };

    fetchFoodItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/dish/delete/${id}`);
      alert('Food item deleted successfully');
      const updatedFoodItems = foodItems.filter(item => item._id !== id);
      setFoodItems(updatedFoodItems);
    } catch (error) {
      console.error('Error deleting food item:', error);
      alert('Failed to delete food item. Please try again.');
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleUpdate = (id, updatedData) => {
    const updatedItems = foodItems.map(item => item._id === id ? { ...item, ...updatedData } : item);
    setFoodItems(updatedItems);
    setEditingItem(null);
  };

  return (
    <div>
      <h2>Food Items</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {foodItems.map(item => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <i className="fa-solid fa-pen-to-square "  onClick={() => handleEdit(item)}></i>
                <i className="fa-solid fa-trash" onClick={() => handleDelete(item._id)}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>  
      <br />
      <div style={{marginTop:"50px"}} >
      {editingItem && <EditFoodItemForm item={editingItem} onUpdate={handleUpdate} />}
      </div>
    </div>
  );
};

export default ViewFoodItems;




























