const express = require("express");
const router = express.Router();

const { Product } = require("../models/product");

router.get("/", async (req, res) => {
  const product = new Product({
    name: "Milk",
    price: 1,
    category: "dairy",
    weight: 1,
    description: "3% dairy milk",
  });

  await product.save();

  res.send(product);
});

module.exports = router;
