const express = require("express");
const postRoutes = require("./routes/post");
const PageRoute = require("./routes/postPage.js");

var path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const app = express();

//Needed as the HTML is using HTML <form> which sends urlencoded message.
app.use(bodyParser.urlencoded({ extended: false }));

app.set(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.use("/post", postRoutes);
app.use("/page", PageRoute);

app.listen(PORT);
console.log("Listening on ", PORT);
console.log("http://localhost:" + PORT + "/");
