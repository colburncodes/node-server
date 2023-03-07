const express = require("express");
const hostname = "127.0.0.1";
const { PORT = 3000 } = process.env;

const app = express();

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
  console.log(`App listening at port ${PORT}`);
});

const userList = "Emma, Sean, Kate, Owen, Jane, Bartholomew, Luke";
const regex = /Bartholomew/;

console.log(userList.match(regex)); // [ 'Bartholomew' ]

const comments = [
  "I have an iPhone 6s — it's incredibly fast.",
  "I have the latest Samsung, everything is fine.",
  "Why pay more if I can get a Xiaomi cheap?",
  "The Nokia 3310 is the best phone ever. Once I dropped it into the Grand Canyon and it still works.",
  "The new iPhones are the best because they have improved water resistance.",
];

const regEx = /iPhone/;
const iPhoneComments = comments.filter((item) => regEx.test(item));

/* 
the test() method checks if the specified string exists and 
returns true or false. we will study this method later in depth.
if the test method returns true, we push the comment to a new array using
the filter method
*/

console.log(iPhoneComments);
