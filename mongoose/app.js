const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const filmRoutes = require('./routes/film');

const { PORT = 3000, BASE_PATH } = process.env;
const app = express();

// write your code here
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// connecting router
app.use('/films', filmRoutes);

app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
  console.log('Link to the server');
  console.log(BASE_PATH);
});