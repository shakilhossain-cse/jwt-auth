require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const dbConnect = require("./config/dbConnect");
dbConnect();


app.get("/", (req, res) => {
  res.send("hello wrold");
});

app.listen(port, () => {
  console.log("server started on " + port);
});
