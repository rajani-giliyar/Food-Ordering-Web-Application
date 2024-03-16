const userModel = require("../models/user_model");
const express = require("express");
const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const userHelper = require("../helpers/user_helper");
const dotenv = require("dotenv");
dotenv.config();

exports.register = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    if (!name || !email || !password || !phone || !address) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({
        error: "Password should be at least 6 characters long",
      });
    }

    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.status(400).json({ error: "Email is already taken" });
    }

    const hashedPassword = await userHelper.hashPassword(password);

    const user = await userModel.create({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User registration successful",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const match = await userHelper.comparePassword(password, user.password);
    if (!match) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = await JWT.sign({ _id: user._id }, "your_secret_key", {
      expiresIn: "7d",
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in login",
      error: error.message,
    });
  }
};

exports.testController = (req, res) => {
  res.send("protected route");
};
