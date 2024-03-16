// CardDetails.js

import React from "react";
import "./CardDetails.css";

const CardDetails = ({ food, onClose }) => {
  return (
    <div className="card-details-overlay" onClick={onClose}>
      <div
        className="card-details-content"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="close" onClick={onClose}>
          &times;
        </span>{" "}
        {/* Move close button here */}
        <h2>{food.name}</h2>
        <img className="setimg" src={food.image} alt={food.name} />
        <p>Restaurant Name: {food.restaurant}</p>
        <p>Price: ${food.price}</p>
        <p>Description: {food.description}</p>
      </div>
    </div>
  );
};

export default CardDetails;
