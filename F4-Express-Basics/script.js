const express = require('express'); // these lines are creating a server using express.js
const app = express()


// middleware
app.use(function (req, res, next) {
  console.log('Middleware is running');
  next() // this is used to pass control to the next middleware function
});

app.use(function (req, res, next) {
  console.log('Another middleware is running');
  next() // this is used to pass control to the next middleware function
});

// NOTE: Middleware always comes before the route handlers
// Middleware can be used for logging, authentication, etc.

// now we can create routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/profile', (req, res) => {
  res.send('This is the profile page/route')
})

app.use((err, req, res, next) => { // error handling middleware
  console.error(err.stack); // log the error stack trace
  res.status(500).send('Something broke!'); // send a response with status code 500
});

app.listen(3000) // running the server on port 3000





// Express.js Framework:

// Introduction to Express.js
// - express.js is an npm package 
// - and a framework
// - it manages everything from receiving requests to sending responses

// Setting up a basic Express server
// request and reponse handling
// routing

// middleware
// error handling