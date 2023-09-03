const express = require("express");
const pageRoutes = require("./routes/page");
var path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.set(express.static(path.join(__dirname, "views")));
app.use("/page", pageRoutes);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});


app.listen(PORT);
console.log("Listening on ", PORT);
console.log("http://localhost:" + PORT + "/");
