const express = require("express");
const mongoose = require("mongoose");
const app = express();

const productsRouter = require("./routes/products");
const PORT = 3000;

connect();

app.use("/api/products", productsRouter);

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://noamab22:xfPTHHCZjr37vU5A@cluster0.m2gxd.mongodb.net/product_manager"
    );

    console.log("connected to db");
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (e) {
    console.log("failed to connect to db", e);
  }
}
