const express = require("express");
const router = express.Router();
const dishController = require("../controllers/DishController");

// Get All Dishes
router.get("/get", dishController.getAllDishes);

// Get Dish by ID
router.get("/getbyid/:id", dishController.getDish);

// Route to create a new food item
router.post("/add", dishController.addDish);

// Update Dish by ID
router.put("/update/:id", dishController.updateDish);

// Delete Dish by ID
router.delete("/delete/:id", dishController.deleteDish);

// Get unique restaurant names
router.get("/uniqueRestaurants", dishController.getUniqueRestaurants);


module.exports = router;
