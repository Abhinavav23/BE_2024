// const mongoose = require("mongoose");
const {Schema, model} = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2")

const productSchema = new Schema({
    name: String,
    price: Number,
    category: String,
    rating: Number,
    inStock: Boolean,
    quantity: Number
})

productSchema.plugin(mongoosePaginate);

const Product = model("products", productSchema);

module.exports = Product;