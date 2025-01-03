const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./express-tutorial/navbar-app/index.html");
const homeStyles = readFileSync("./express-tutorial/navbar-app/styles.css");
const homeImage = readFileSync("./express-tutorial/navbar-app/logo.svg");
const homeLogic = readFileSync("./express-tutorial/navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  console.log("user hit the server");
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type" : "text/html"})
    res.write(homePage)
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type" : "text/css"})
    res.write(homeStyles)
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type" : "image/svg+xml"})
    res.write(homeImage)
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type" : "text/javascript"})
    res.write(homeLogic)
    res.end();
  } else {
    res.writeHead(404, { "content-type" : "text/html"})
    res.write("<h1>Page not found</h1>")
    res.end();
  } 
});

server.listen(5000);
