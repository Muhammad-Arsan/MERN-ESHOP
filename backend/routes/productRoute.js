const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");

const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router
  .route("/products")
  .get(isAuthenticatedUser, authorizeRoles("Admin"), getAllProducts);
router.route("/product/new").post(isAuthenticatedUser, createProduct);
router
  .route("/product/:id")
  .put(isAuthenticatedUser, updateProduct)
  .delete(isAuthenticatedUser, deleteProduct)
  .get(getProductDetails);

module.exports = router;
