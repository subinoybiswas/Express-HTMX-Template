const express = require("express");
const pageRoutes = require("./routes/page");

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/page", pageRoutes);

app.listen(PORT);
console.log("Listening on ", PORT);
