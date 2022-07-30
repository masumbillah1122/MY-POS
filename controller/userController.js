const User = require("../models/userModel");

// User Login
exports.loginController = async (req, res, next) => {
    try {
    const {userId, password } = req.body;
    const user = await User.findOne({ userId, password});
        if (user) {
            res.status(200).send(user);
        } else {
            res.json({
                message: "Login Fail",
                user,
            });
        };
        
  } catch (error) {
    console.log(error);
  }
};

//User Register
exports.registerController = async (req, res, next) => {
  try {
    const newUser = new User({ ...req.body, verified: true });
    await newUser.save();
    res.status(200).send("New User Created Successfully!");
  } catch (error) {
    console.log(error);
  }
};