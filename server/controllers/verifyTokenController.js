const jwt = require("jsonwebtoken");
const User = require("../models/User");
const verifyTokenController = async (req, res) => {
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
  return res.status(200).json({ success: true, data: decodeToken.email });
};
module.exports = verifyTokenController;
