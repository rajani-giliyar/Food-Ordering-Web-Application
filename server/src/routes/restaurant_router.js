// restaurant_router.js
const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurant_controller');

// Route to create a new restaurant
router.post('/', restaurantController.createRestaurant);

// Route to update restaurant details
router.put('/:id', restaurantController.updateRestaurant);

// Route to delete a restaurant
router.delete('/:id', restaurantController.deleteRestaurant);

module.exports = router;
