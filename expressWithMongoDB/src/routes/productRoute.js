const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getOneProduct,
  getFilteredProducts,
  updateExistingProduct,
  updateOrCreateProduct,
  deleteProduct,
  getPaginatedData
} = require("../controllers/productController");

router.get("/all", getAllProducts);

router.post("/", createProduct);

router.get("/:productId", getOneProduct);

router.get("/filter/all", getFilteredProducts);

router.patch("/:productId", updateExistingProduct);

router.put("/:productId", updateOrCreateProduct);

router.delete("/:productId", deleteProduct);

router.get("/filter/page", getPaginatedData)

module.exports = router;
