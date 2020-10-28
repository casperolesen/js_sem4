require('dotenv').config();
import express from "express";
import path from "path";

import { UserFacade } from "./facades/userFacade";

const debug = require("debug")("game-case")

// Datebase
UserFacade.addUser({ name: "User 1", userName: 'user1@mail.com', password: '123456789', role: 'user' });
UserFacade.addUser({ name: 'User 2', userName: 'user2@mail.com', password: 'abcd12345', role: 'user' });

// App
const app = express();

// Middleware
app.use(express.json());

// serving static files
app.use(express.static('public'))

/* 
  --- API ---
*/
app.get("/api/dummy", (req, res) => {
  res.json({ msg: "Hello" })
})

// GET
app.get("/api/users/:id", (req, res) => {
  const userName = req.params.id // id is here userName/email
  let user = UserFacade.getUser(userName)
  res.json(user)
})

app.get("/api/users", (req, res) => {
  let users = UserFacade.getAllUsers()
  res.json(users)
})


// POST
app.post("/api/users", (req, res) => {
  // {"name": "string", "userName": "string", "password": "string", "role": "string"}
  debug(req.body);
  let user = req.body;

  let added = UserFacade.addUser(user);
  
  if (added) {
    res.json(user)
  } else {
    res.json('User not added to database..')
  }

})

// DELETE
app.delete("/api/users/:id", (req, res) => {
  const userName = req.params.id; // id is here userName/email
  const deleted = UserFacade.deleteUser(userName);

  if (deleted) {
    res.json('User deleted!')
  } else {
    res.json('Error: User NOT deleted!')
  }
})


// PORT is set in .env file
const PORT = process.env.PORT || 3333;
const server = app.listen(PORT)
console.log(`Server started, listening on port: ${PORT}`)
module.exports.server = server;
