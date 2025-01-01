const http = require("http");

const server = http.createServer((req, res) => {
  /*     if(req.url === '/'){ // This is the home page
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){ // This is the about page
        res.end('Welcome to our about pager');
    }
    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`) */
  if (req.url === "/") {
    res.end("Welcome to our homepager");
  }
  if (req.url === "/about") {
    res.end("Welcome to our about page");
  }
  res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`);
});

server.listen(1000); // This is the port number that the server will listen to. 5000 is the default port number for node.js. You can change it to any number you want.
