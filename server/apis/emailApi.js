const express = require("express");
const verifyEmailController = require("../controllers/emailController");
const router = express.Router();

router.get("/verify", verifyEmailController);

module.exports = router;
