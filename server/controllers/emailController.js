const jwt = require("jsonwebtoken");
const User = require('../models/User')
const verifyEmailController = async (req, res) => {
    const { token } = req.query;
    if (!token) {
      return res.status(404).json({ success: false, msg: "Invalid Token " });
    }
    // decode token
    let decodeToken;
    try {
      decodeToken = jwt.verify(token, "$lksadjkfjs8sdjf/klsjd");
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, msg: "invalid Token", error });
    }
    const oldUser = await User.findOne({ email: decodeToken.email });
    if (!oldUser) {
      return res.status(400).json({ success: false, msg: "User data not found" });
    }
    oldUser.varified = true;
    await oldUser.save();
    return res.status(200).json({ success: true, msg:"your email is varifyed successfully" });
};
module.exports = verifyEmailController;
