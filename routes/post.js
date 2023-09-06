const express = require("express");
const postRouter = express.Router();

postRouter.use("/", (req, res) => {
  res.send("Your Name is: " + req.body.fname + " " + req.body.lname);
});

module.exports = postRouter;
