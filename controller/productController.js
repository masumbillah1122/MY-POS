const Product = require("../models/productModel");


//All Product 
exports.getProductController = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};   

//Add product
exports.addProductController = async (req, res, next) => {
  try {
    const newProducts = new Product(req.body);
    await newProducts.save();
    res.status(200).send("Product Created Successfully!");
  } catch (error) {
    console.log(error);
  }
};  

//Update Product 
exports.updateProductController = async (req, res, next) => {
  try {

    await Product.findOneAndUpdate({ _id: req.body.productId }, req.body,
      { new: true });
    res.status(201).json("Product Updated successfully!");
  } catch (error) {
    res.status(404).send(error);
    console.log(error);
  }
};

//Delete Product
exports.deleteProductController = async (req, res, next) => {
  try {
    
    await Product.findOneAndDelete({ _id: req.body.productId });
    res.status(200).json("Product Deleted Successfully!");
  } catch (error) {
    res.status(404).send(error);
    console.log(error);
  }
}