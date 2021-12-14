const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // Set header content type for the response
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello there my friend.");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Listening for requests on port 3000");
});
