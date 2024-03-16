// Card.js

import React from "react";
import "./Card.css";
import { useState } from "react";

const Card = ({ food, onClick }) => {
  const [quantity, setquantity] = useState(1);

  return (
    <div className="card">
      <h3 className="foodname">{food.name}</h3>
      <img onClick={onClick} src={food.image} alt={food.name} />
      <div className="card-details">
        <p >Price: ${food.price}</p>
        <div className="quantity">
        <p>Quantity</p>
        <select
          className="form-control"
          value={quantity}
          onChange={(e) => {
            setquantity(e.target.value);
          }}
        >
          {[...Array(100).keys()].map((x, i) => {
            return <option value={i + 1}>{i + 1}</option>;
          })}
        </select>
        </div>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
