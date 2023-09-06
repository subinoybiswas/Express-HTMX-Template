const express = require("express");
const getRouter = express.Router();
var path = require("path");

getRouter.use("/books", (req, res) => {
  res.sendFile(path.join(__dirname, "../Static/get-books.html"));
});

getRouter.use("/movies", (req, res) => {
  res.sendFile(path.join(__dirname, "../Static/get-movies.html"));
});

getRouter.use("/tv", (req, res) => {
  res.sendFile(path.join(__dirname, "../Static/get-tv.html"));
});
module.exports = getRouter;
