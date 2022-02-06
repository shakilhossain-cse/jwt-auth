require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const authAPI = require("./apis/authApi");
const app = express();
const port = process.env.PORT || 4000;
const dbConnect = require("./config/dbConnect");
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello wrold");
});

app.use("/api/auth", authAPI);

app.listen(port, () => {
  console.log("server started on " + port);
});
