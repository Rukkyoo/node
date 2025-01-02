//Import paths aren't correct

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./express-tutorial/navbar-app"));

/* app.get("/", (req, res) => {    
    res.sendFile(path.resolve(__dirname, "./express-tutorial/navbar-app/index.html"));
  }); */

  app.all("*", (req, res) => {
    res.status(404).send("<h1>Resource not found</h1>");
  })

app.listen(5000, () => {
    console.log("server is listening on port 5000....");
  });