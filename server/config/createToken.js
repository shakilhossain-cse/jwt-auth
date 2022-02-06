const jwt = require("jsonwebtoken");

module.exports = (data) => {
  return jwt.sign(data, "$lksadjkfjs8sdjf/klsjd", { expiresIn: "1h" });
};
