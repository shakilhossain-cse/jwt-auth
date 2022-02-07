const bcrypt = require("bcryptjs");
const User = require("../models/User");

const tokenGenerator = require("../config/createToken");
const {
  sendVerificationEmail,
  sendRorgetPasswordEmail,
} = require("../config/sendEmail");

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
      await newUser.save();
      // genarate token
      const token = tokenGenerator({ email: newUser.email });
      // send email
      const link =
        "http://" + req.hostname + ":4000/api/email/varify?token" + token;
      const sendMail = await sendVerificationEmail(newUser.email, link);

      if (!sendMail) {
        res.status(200).json({
          success: true,
          msg: "Registered Successfully . Something went wrong for varification mail not sent",
        });
      } else {
        res.status(200).json({
          success: true,
          msg: "Registered Successfully . Your varification mail sent your email",
        });
      }
    });
  });
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, msg: "Please fill all the field " });
  }
  const oldUser = await User.findOne({ email });
  if (!oldUser) {
    return res
      .status(400)
      .json({ success: false, msg: "Your email is not found" });
  }
  const comparePassword = await bcrypt.compare(password, oldUser.password);
  if (!comparePassword) {
    return res
      .status(400)
      .json({ success: false, msg: "Your password is not matched" });
  }
  const token = tokenGenerator({ email: oldUser.email });
  return res
    .status(200)
    .json({ success: true, token, msg: "You are login successfully" });
};
const forgetPasswordController = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res
      .status(400)
      .json({ success: false, msg: "Please input your forget password feild" });
  }
  const oldUser = await User.findOne({ email });
  if (!oldUser) {
    return res
      .status(400)
      .json({ success: false, msg: "Your email is not found" });
  }
  // genarate token
  const token = tokenGenerator({ email: oldUser.email });
  // send email
  const link =
    "http://" + req.hostname + ":4000/api/auth/verifyToken?token=" + token;
  const sendMail = await sendRorgetPasswordEmail(oldUser.email, link);
  if (!sendMail) {
    res.status(200).json({
      success: true,
      msg: "Something went wrong for Reset Password Link not sent",
    });
  } else {
    res.status(200).json({
      success: true,
      msg: "Reset Password Link not sent sent your email",
    });
  }
};
module.exports = {
  registerController,
  loginController,
  forgetPasswordController,
};
