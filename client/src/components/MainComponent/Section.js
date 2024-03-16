
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Section.css"; // Import CSS file for styling

const Section = ({ setSelectedRestaurant, setSelectedFood }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/dish/uniqueRestaurants"
        );
        setRestaurants(response.data.uniqueRestaurants);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    const fetchFoods = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/dish/get");
        setFoods(response.data.data); 
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };

    fetchRestaurants();
    fetchFoods();
  }, []);

  const handleRestaurantChange = (event) => {
    setSelectedRestaurant(event.target.value);
  };

  const handleFoodChange = (event) => {
    setSelectedFood(event.target.value);
  };

  return (
    <div className="section">
      <div className="search-restaurant">
        <select className="dropdown" onChange={handleRestaurantChange}>
          <option value="">Select Restaurant</option>
          {restaurants.map((restaurant, index) => (
            <option key={index} value={restaurant}>
              {restaurant}
            </option>
          ))}
        </select>
      </div>
      <div className="search-food">
        <select className="dropdown" onChange={handleFoodChange}>
          <option value="">Select Food</option>
          {Array.isArray(foods) &&
            foods.map(
              (
                food,
                index 
              ) => (
                <option key={index} value={food.name}>
                  {food.name}
                </option>
              )
            )}
        </select>
       

        
      </div>
    </div>
  );
};

export default Section;

