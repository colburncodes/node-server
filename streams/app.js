const http = require("node:http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const { PORT = 3000 } = process.env;

const server = http.createServer((req, res) => {
  // locate path of file
  const filePath = path.join(__dirname, "war-and-peace.txt");
  // open stream to read file
  const fileReader = fs.createReadStream(filePath, { encoding: "utf8" });

  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  // pipe is only for readable streams
  // method accepts a writable stream as an arg
  fileReader.pipe(res);
});

server.listen(PORT, hostname, () => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 3000
    📭  Query at http://localhost:3000
  `);
});
