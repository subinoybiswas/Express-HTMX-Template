const express = require("express");
const pageRouter = express.Router();

pageRouter.use("/", (req, res) => {
  res.send("Your Name is: " + req.body.fname + " " + req.body.lname);
});

module.exports = pageRouter;
