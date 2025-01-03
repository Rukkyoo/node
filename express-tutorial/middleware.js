const express = require("express");
const app = express();
// Middleware refers to a function that occurs inbetween a request anda response i.e req => middleware => res

const logger = require("./logger");

app.use(logger); 

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
