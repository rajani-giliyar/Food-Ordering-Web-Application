
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './AddRestaurantPage.css'; // Import CSS file
import { Link } from 'react-router-dom';

const AddRestaurantPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    openingTime: '',
    closingTime: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send restaurant data to backend to register
      const response = await fetch('http://localhost:8000/api/restaurant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Restaurant registered successfully
        toast.success('Restaurant registered successfully');
        // Navigate to AddingFoodItems page
        navigate('/addingfooditems');
      } else {
        const data = await response.json();
        toast.error(data.error || 'Failed to register restaurant');
      }
    } catch (error) {
      console.error('Error registering restaurant:', error);
      toast.error('An unexpected error occurred');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Add Restaurant</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Address:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div>
            <label>Opening Time:</label>
            <input type="time" name="openingTime" value={formData.openingTime} onChange={handleChange} required />
          </div>
          <div>
            <label>Closing Time:</label>
            <input type="time" name="closingTime" value={formData.closingTime} onChange={handleChange} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <button type="submit">Register</button>
          <div className='foodclass'>
     
      <p >Already Registered?</p>
      <Link  to="/addingfooditems" >Add Food Item Here</Link>
      
    </div>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurantPage;
