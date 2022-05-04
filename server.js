const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

app.get("/contact", function (req, res) {
  res.send("<h1>Contact Page</h1>");
});

app.get("/about", function (req, res) {
  res.send("<h1>Ben Daniels</h1> <p>A human man learning web development</p>");
});

app.get("/hobbies", function (req, res) {
  res.send("<h1>Hobbies</h1> <p>Making Things</p>");
});

app.listen(3000, function () {
  console.log("sever started on port 3000");
});
