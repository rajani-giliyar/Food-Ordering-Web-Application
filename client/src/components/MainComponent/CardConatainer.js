import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import CardDetails from "./CardDetails";
import "./CardContainer.css";

const CardContainer = ({ selectedRestaurant, selectedFood }) => {
  const [foods, setFoods] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/dish/get");
        setFoods(response.data.data);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };

    fetchFoods();
  }, []);

  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  const filteredFoods = foods.filter((food) => {
    if (selectedRestaurant && selectedFood) {
      return (
        food.restaurant === selectedRestaurant && food.name === selectedFood
      );
    } else if (selectedRestaurant) {
      return food.restaurant === selectedRestaurant;
    } else if (selectedFood) {
      return food.name === selectedFood;
    }
    return true;
  });

  return (
    <div className="card-container">
      {filteredFoods.map((food) => (
        <Card
          key={food._id}
          food={food}
          onClick={() => handleCardClick(food._id)}
        />
      ))}
      {selectedCard && (
        <CardDetails
          food={foods.find((food) => food._id === selectedCard)}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </div>
  );
};

export default CardContainer;
