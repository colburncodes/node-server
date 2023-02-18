const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  genre: {
    type: String,
    enum: ['comedy', 'drama', 'action', 'thriller', 'documentary']
  }
});

module.exports = mongoose.model("film", filmSchema);
