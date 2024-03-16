const express = require("express");
const mongoose = require("mongoose");
const Dish = require("../models/Dish");

// Get All Dishes
exports.getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.status(200).json({ success: true, data: dishes });
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// / Controller function to add a new food item
exports.addDish = async (req, res) => {
  try {
    const { restaurant, image, name, quantity, price, description } = req.body;
    const newDish = new Dish({
      restaurant,
      image,
      name,
      quantity,
      price,
      description,
    });

    await newDish.save();
    res
      .status(201)
      .json({ success: true, message: "Food item added successfully" });
  } catch (error) {
    console.error("Error adding food item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get Dish by ID
exports.getDish = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (!dish) {
      return res
        .status(404)
        .json({ success: false, message: "Dish not found" });
    }
    res.status(200).json({ success: true, data: dish });
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Delete Dish
exports.deleteDish = async (req, res) => {
  try {
    const deletedDish = await Dish.findByIdAndDelete(req.params.id);
    if (!deletedDish) {
      return res
        .status(404)
        .json({ status: "error", message: "Dish not found" });
    }
    res
      .status(204)
      .json({ status: "success", message: "Dish successfully deleted" });
  } catch (err) {
    console.error(`Error: ${err}`);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};

// Get unique restaurant names
exports.getUniqueRestaurants = async (req, res) => {
  try {
    const uniqueRestaurants = await Dish.distinct("restaurant");
    res.status(200).json({ uniqueRestaurants });
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};

exports.updateDish = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFoodItem = await FoodItem.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedFoodItem);
  } catch (error) {
    console.error("Error updating food item:", error);
    res.status(500).json({ message: "Failed to update food item" });
  }
};
