const express = require("express");
const pageRouter = express.Router();

pageRouter.use("/", (req, res) => {
  res.send("Your Name is: " + req.body.name);
  console.log(req.body.name);
});

module.exports = pageRouter;
