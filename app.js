const http = require("node:http");
const { router } = require("./routes/index");

const hostname = "127.0.0.1";
const { PORT = 3000 } = process.env;

const server = http.createServer(router);

server.listen(PORT, hostname, () => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 3000
    📭  Query at http://localhost:3000
  `);
});
