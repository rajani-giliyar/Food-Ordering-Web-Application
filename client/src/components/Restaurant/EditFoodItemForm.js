import React, { useState } from 'react';
import axios from 'axios';

const EditFoodItemForm = ({ item, onUpdate }) => {
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);
  const [price, setPrice] = useState(item.price);
  const [description, setDescription] = useState(item.description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/dish/update/${item._id}`, {
        name,
        quantity,
        price,
        description,
      });
      onUpdate(item._id, { name, quantity, price, description });
      alert('Food item updated successfully');
    } catch (error) {
      console.error('Error updating food item:', error);
      alert('Failed to update food item. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditFoodItemForm;
























