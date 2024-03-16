const Restaurant = require("../models/restaurant_model");

// Controller function to create a new restaurant
exports.createRestaurant = async (req, res) => {
  try {
    const { name, address, openingTime, closingTime, email } = req.body;

    if (!name || !address || !openingTime || !closingTime || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingRestaurant = await Restaurant.findOne({ email });
    if (existingRestaurant) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    const newRestaurant = new Restaurant({
      name,
      address,
      openingTime,
      closingTime,
      email,
    });

    await newRestaurant.save();

    res
      .status(201)
      .json({ success: true, message: "Restaurant created successfully" });
  } catch (error) {
    console.error("Error creating restaurant:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, openingTime, closingTime, email } = req.body;

    if (!name || !address || !openingTime || !closingTime || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await Restaurant.findByIdAndUpdate(id, {
      name,
      address,
      openingTime,
      closingTime,
      email,
    });

    res.status(200).json({
      success: true,
      message: "Restaurant details updated successfully",
    });
  } catch (error) {
    console.error("Error updating restaurant:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;

    await Restaurant.findByIdAndDelete(id);

    res
      .status(200)
      .json({ success: true, message: "Restaurant deleted successfully" });
  } catch (error) {
    console.error("Error deleting restaurant:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
