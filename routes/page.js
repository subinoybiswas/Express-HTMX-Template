const express = require("express");

const pageRouter = express.Router();

pageRouter.get("/", (req, res) => {
  res.send("Yay!");
});

module.exports = pageRouter;
