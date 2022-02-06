const bcrypt = require("bcryptjs");
const User = require("../models/User");

const tokenGenerator = require("../config/createToken");

const registerController = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ success: false, msg: "Please fill all the field " });
  }
  const oldUser = await User.findOne({ email });
  if (oldUser) {
    return res
      .status(403)
      .json({ success: false, msg: "your email already exist" });
  }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      const hashPassword = hash;

      const newUser = new User({
        name,
        email,
        password: hashPassword,
      });
      
      console.log("token", tokenGenerator({email:newUser.email}));
      await newUser.save();
      res.status(200).json({ success: true, msg: "Registered Successfully" });
    });
  });
};

module.exports = { registerController };
