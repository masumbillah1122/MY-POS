const express = require('express');
const {
  getProductController,
  addProductController,
  updateProductController,
  deleteProductController,
} = require("../controller/productController");
const productRouter = express.Router();

productRouter.get("/getproducts", getProductController);
productRouter.post("/addproducts", addProductController);
productRouter.put("/updateproducts", updateProductController);
productRouter.post("/deleteproducts", deleteProductController);

module.exports = productRouter;