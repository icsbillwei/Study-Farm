import express from 'express';
var router = express.Router();
import db from '../db/connection.mjs'
import Tasks from "./tasks.mjs";
import User from "../models/user.mjs"
import { findUserByUsername, insertUser } from '../queries/user_queries.mjs';
import {findTaskById, findTasksByUsername} from "../queries/task_queries.mjs";


// Register
router.post('/register', async function (req, res) {
  const { username, password } = req.body; // Destructuring for cleaner code
  /*let collection = await db.collection("users");
  let userExists = await collection.findOne({ username: username });*/
  let user = await findUserByUsername(username);
  if (user) {
    return res.status(400).send("Username already exists");
  } else {
    // await collection.insertOne(new User(username, password, []));
    await insertUser(new User(username, password, []));
    res.send("Registration Success");
  }
});

// Login
router.post('/login', async function (req, res) {
  const { username, password } = req.body;
  /*let collection = await db.collection("users");
  let user = await collection.findOne({ username: username });*/
  let user = await findUserByUsername(username);
  if (!user) {
    return res.status(400).send("Username does not exist");
  } else if (user.password !== password) {
    return res.status(400).send("Bad credentials");
  } else {
    // Consider more secure ways to handle sessions or user identification
    res.cookie("user", username, { httpOnly: true });
    res.send("Login Success");
  }
});


// get user by username
router.get('/:username', async function(req, res, next) {
  const username = req.params.username; // get userid
  const tasks = await findTasksByUsername(username);
  let user = await findUserByUsername(username);
  if (!user) {
    return res.status(400).send("User not found with id");
  }  else {
    user.tasks = tasks;
    res.send(user)
  }
});

export default router;
