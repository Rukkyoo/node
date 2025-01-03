const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("User is in the home page");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  console.log("User is in the about page");
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
res.status(404).send("<h1>Resource not found</h1>");
})

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
