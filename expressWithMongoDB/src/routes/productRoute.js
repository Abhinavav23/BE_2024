const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getOneProduct,
  getFilteredProducts
} = require("../controllers/productController");

router.get("/all", getAllProducts);

router.post("/", createProduct);

router.get("/:productId", getOneProduct);

router.get("/filter/all", getFilteredProducts)

module.exports = router;
