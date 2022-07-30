const Bills = require('../models/billsModel');

//All Bills 
exports.getBillsController = async (req, res, next) => {
  try {
    const bills = await Bills.find();
    res.send(bills);
  } catch (error) {
    console.log(error);
  }
};  

//Add product
exports.addBillsController = async (req, res, next) => {
  try {
    const newBills = new Bills(req.body);
    await newBills.save();
    res.send("Bill Created Successfully!");
  } catch (error) {
    console.log(error);
  }
};  