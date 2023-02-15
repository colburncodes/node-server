/// <summary>
// https://nodejs.org/api/fs.html#fs_fs_promises_api
// fs module, which allows us to access and manipulate the file system
/// </summary>

const http = require("http");
const fs = require("fs");
const path = require("path");

const { generateMainView } = require("./views");

const hostname = "127.0.0.1";
const { PORT = 3000 } = process.env;

const server = http.createServer((req, res) => {
  // locate path to file
  const dataPath = path.join(__dirname, "data.json");
  console.log(dataPath);
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  fs.readFile(dataPath, { encoding: "utf-8" }, (err, data) => {
    if (err) console.error(err);

    const songs = JSON.parse(data);

    const markup = generateMainView(songs);

    res.end(markup);
  });
});

server.listen(PORT, hostname, () => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 3000
    📭  Query at http://localhost:3000
  `);
});
