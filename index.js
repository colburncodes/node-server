// const http = require("http");

// const server = http.createServer(() => {
//   console.log(`
//   🚀  Server is running!
//   🔉  Listening on port 3000
//   📭  Query at http://localhost:3000
// `);
// });

// server.listen(3000);

const http = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Connecting... Welcome Colburn!\n");
});

server.listen(port, hostname, () => {
  console.log(`
  🚀  Server is running!
  🔉  Listening on port 3000
  📭  Query at http://localhost:3000
`);
});
