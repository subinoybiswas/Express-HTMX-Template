const express = require("express");
const PageRouter = express.Router();
var path = require("path");

PageRouter.use("/post", (req, res) => {
  res.sendFile(path.join(__dirname, "../Static/post.html"));
});

PageRouter.use("/get", (req, res) => {
  res.sendFile(path.join(__dirname, "../Static/get.html"));
});

module.exports = PageRouter;
