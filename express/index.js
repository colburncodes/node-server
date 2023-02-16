const express = require("express");
// listen to port 3000
const { PORT = 3000 } = process.env;

const app = express();

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
  console.log(`App listening at port ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).send(
    `<html>
        <body>
          <p>Response to the signal from distant space</p>
        </body>
        </html>`
  );
});

app.get("/pokemon", (req, res) => {
  // make a mutable copy of our pokedex
  let result = pokemon;

  // filter out all pokemon that aren't of the desired type
  if (req.query.type) {
    result = result.filter((item) => item.type === req.query.type);
  }

  // filter out all pokemon that aren't of the desired stage
  if (req.query.stage) {
    result = result.filter((item) => item.stage === req.query.stage);
  }

  res.send(result);
});

const animals = [
  {
    kind: "dog",
    breed: "chihuahua",
  },
  {
    kind: "dog",
    breed: "bloodhound",
  },
  {
    kind: "dog",
    breed: "german shepherd",
  },
  {
    kind: "cat",
    breed: "abyssinian",
  },
  {
    kind: "cat",
    breed: "dwelf",
  },
  {
    kind: "cat",
    breed: "highlander",
  },
];

app.get("/animals", (req, res) => {
  debugger;
  let result = animals;
  if (req.query.kind) {
    result = result.filter((item) => item.breed === req.query.breed);
  }

  if (req.query.kind) {
    result = result.filter((item) => item.kind == req.query.kind);
  }
  res.send(result);
});

