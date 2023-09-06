const express = require("express");
const pageRoutes = require("./routes/post");
var path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set(express.static(path.join(__dirname, "views")));

app.use("/post", pageRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.listen(PORT);
console.log("Listening on ", PORT);
console.log("http://localhost:" + PORT + "/");
