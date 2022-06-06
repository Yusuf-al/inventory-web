const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  img: {
    type: String,
  },
  name: {
    type: String,
  },
  brand: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  user: {
    type: String,
  },
  price: {
    type: String,
  },
});

const products = mongoose.model("ProductsList", productSchema);

module.exports = products;
