const express = require("express");
const app = express();
const { products } = require("./express-tutorial/data");

app.get("/", (req, res) => {
  res
    .status(200)
    .send('<h1>Home page</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })
res.json(newProducts);
})

/* const singleProduct = products.find(
    (product) => product.id === Number(productID)
  ); */

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
