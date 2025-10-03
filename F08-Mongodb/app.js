const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/create', async function(req, res) {
  let createduser = await userModel.create({
    name: 'Rajveer Singh',
    email: '777rajveersingh@gmail.com',
    username: 'rajveer6749',
  })

  res.send(createduser);
});

app.get('/update', async function(req, res) {
  let updatedUser = await userModel.findOneAndUpdate({username: 'rajveer6749'}, {name: 'rajveer'}, {new: true});

  res.send(updatedUser);
});

app.get('/read', async function(req, res) {
  let users = await userModel.find({});
  res.send(users);
});

app.get('/delete', async function(req, res) {
  let deletedUser = await userModel.findOneAndDelete({username: 'rajveer6749'});
  res.send(deletedUser);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});











// Data storage

// Types of DBs - SQL | NoSQL
// In NoSQL data is stored in JSON-like format
// MongoDB is a NoSQL database


// What and Why

// Terminologies - collections, documents, schemas, keys, models

// CODE                     DATABASE
// ____________________________________
// mongoose.connect         database create
// model create             collection        
// CREATE code              document





// mongodb installation. check watch later section of youtube
// mongodb connection
// schema
// model
// CRUD operations
// mongoose installation
// learn about ODM and ORM by yourself
