const products = require("./model");
const mongoose = require("mongoose");

exports.addProduct = async (req, res, next) => {
  try {
    const itemAdd = await products.create(req.body);
    console.log(itemAdd);
  } catch (err) {
    console.log(err);
  }
};
