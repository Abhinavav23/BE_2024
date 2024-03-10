// const mongoose = require("mongoose");
const {Schema, model} = require("mongoose");

const productSchema = new Schema({
    name: String,
    price: Number,
    category: String,
    rating: Number,
    inStock: Boolean,
    quantity: Number
})

const Product = model("products", productSchema);

module.exports = Product;