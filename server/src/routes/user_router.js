

// module.exports = router;
const express = require('express');
const userController = require('../controllers/user_controller')
const dotenv = require('dotenv');
dotenv.config();
const userMiddleware = require("../middlewares/user_middleware")


// router object
const router = express.Router();

// routing
// REGISTER || METHOD POST

router.post('/register',userController.register)

// Login || METHOD POST

router.post('/login',userController.login)

// test routes
router.get('/test',userMiddleware.requireSignIn,userMiddleware.isAdmin,userController.testController)

module.exports = router;
