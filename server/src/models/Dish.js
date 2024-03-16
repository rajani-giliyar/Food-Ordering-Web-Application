const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  restaurant: {
    type: String,
    required: [true, "Please enetr restaurant name"],
  },
  image: {
    type: String,
    required: [true, "Please copy link"],
  },

  name: {
    type: String,
    required: [true, "Please enter the name of the dish"],
  },

  quantity: {
    type: Number,
    required: [true, "Please enter the quantity of the dish"],
  },
  price: {
    type: Number,
    required: [true, "Please enter the price of the dish"],
  },

  description: {
    type: String,
    required: [true, "Please provide description about the dish"],
  },
});

const Dish = mongoose.model("foods", dishSchema);

module.exports = Dish;
