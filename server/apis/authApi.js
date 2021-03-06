const express = require("express");
const router = express.Router();

const {
  registerController,
  loginController,
  forgetPasswordController,
  resetPasswordController,
} = require("../controllers/authControllers");
const verifyTokenController = require("../controllers/verifyTokenController");

// register route
router.post("/register", registerController);
// login route
router.post("/login", loginController);
// forget passsword route
router.post("/forgetpassword", forgetPasswordController);
// verify forget password route
router.get("/verifyToken", verifyTokenController);
// reset password 
router.get('/resetpassword', resetPasswordController);

module.exports = router;
