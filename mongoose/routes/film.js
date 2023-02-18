const router = require("express").Router();
const Film = require("../models/film");

/// <summary>
//  create() method is like a promise
//  you can add then() and catch()
/// </summary>
router.post("/", (req, res) => {
  const { title, genre } = req.body;

  Film.create({ title, genre })
    .then((film) => res.send({ data: film }))
    .catch((err) => res.status(500).send({ message: "Error" }));
});

// READING DOCUMENTS
// This involves searching for documents and reading data from them if found.
// There are many ways to find a document, the three most popular being findById(), findOne() and find().

router.get("/:id", (req, res) => {
  Film.findById(req.params.id)
    .then((film) => res.send({ data: film }))
    .catch((err) => res.status(500).send({ message: "Error" }));

  // Searching for one document by specific parameters:
  // The findOne() method returns the first document that matches the request parameters:
  Film.findOne({ name: "The Last Of Us" });

  // Find all films
  Film.find({});
});

// UPDATING DOCUMENTS
// You can use the findByIdAndUpdate() method to update a specific document.
// It accepts an identifier in string form as the first argument.
// The second argument is an object with the properties that need to be updated
// findByIdAndUpdate(), findOneAndUpdate(), updateMany()
router.patch("/:id", (req, res) => {
  // updating the name of the user found by _id
  Film.findByIdAndUpdate(req.params.id, { name: "The Last Of Us" })
    .then((film) => res.send({ data: film }))
    .catch((err) => res.status(500).send({ message: "Error" }));
});

// Thanks to the options object, we can transfer an updated record to the then() handler. 
// We can also set up validation or create a document if it was not found:
router.patch("/:id", (req, res) => {
  // updating the name of the film found by _id
  Film.findByIdAndUpdate(
    req.params.id,
    { name: "The Last Of Us" },
    {
      new: true, // then handler receives the updated entry as input
      runValidators: true, // the data will be validated before the update
      upsert: true, // if the film entry wasn't found, it will be created
    }
  )
    .then((film) => res.send({ data: film }))
    .catch((err) => res.status(500).send({ message: "Error" }));
});

// DELETING DOCUMENTS
// Deleting a specific document: You can do this by using the findByIdAndRemove() method:
router.delete('/:id', (req, res) => {
    Film.findByIdAndRemove(req.params.id)
        .then(film => res.send({ data: film }))
        .catch(err => res.status(500).send({ message: 'Error' }));
});
