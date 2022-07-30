const express = require("express");
const {
  loginController,
  registerController,
} = require("../controller/userController");
const userRouter = express.Router();

userRouter.post("/login", loginController);

userRouter.post("/register", registerController);


module.exports = userRouter;
