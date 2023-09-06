const express = require("express");
const PageRouter = express.Router();
var path = require("path");

PageRouter.use("/post", (req, res) => {
  res.sendFile(path.join(__dirname, "../Static/POST/post.html"));
});

PageRouter.use("/get", (req, res) => {
  res.sendFile(path.join(__dirname, "../Static/GET/get.html"));
});

module.exports = PageRouter;
