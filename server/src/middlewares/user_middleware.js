const JWT = require("jsonwebtoken");
const userModel = require("../models/user_model");

// protected routes token base
exports.requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      "qwegjkfhsidfhsvygjhguyadfgjk"
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

// admin access 0-user 1-admin

exports.isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middleware",
    });
  }
};
