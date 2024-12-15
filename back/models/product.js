const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 10000,
  },
  category: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  weight: {
    type: Number,
    required: true,
    minlength: 0,
    maxlength: 1000,
  },
  description: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 10000,
  },
  createdAt: { type: Date, default: Date.now() },
});

const Product = mongoose.model("Product", productSchema, "products");

module.exports = { Product };
