const path = require("path");
const express = require("express");
const {
  getUsers,
  createUser,
  updateUserProfile,
  deleteUser,
} = require("./users");

const { PORT = 3000, BASE_PATH } = process.env;

const app = express();

app.patch("/users/:id", updateUserProfile);
app.post("/users", createUser);
app.get("/users", getUsers);
app.delete("/users/:id", deleteUser);

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("Link to the server");
  console.log(BASE_PATH);
});
