const express = require("express");
const { people } = require("./express-tutorial/data");
const app = express();

app.use(express.static("./express-tutorial/methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  let { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide credentials");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
