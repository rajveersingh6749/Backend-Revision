const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // serve static files from the public folder like CSS, JS, images, etc. also need to require path module.
app.set('view engine', 'ejs'); // set EJS as the templating engine

app.get('/', (req, res) => {
    res.render('index'); // render the index.ejs file
    // what we want to render should be in the views folder
});

app.get('/profile/:username', (req, res) => { // dynamic routing example
    res.send(`Welcome to the profile of ${req.params.username}!`);
    // here, :username is a dynamic parameter that can be accessed using req.params.username
});

app.get('/author/:username/:age', (req, res) => { // another dynamic routing example
    const { username, age } = req.params; // destructuring to get username and age from req.params
    res.send(`Author: ${username}, Age: ${age}`);
});



// app.get('/', (req, res) => {
//     res.send('Welcome to the EJS Dynamic Routing Example!');
// });



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})

// NOTE:
//console.log(__dirname); // This will give the absolute path to the current directory
// console.log(__filename); // This will give the absolute path to the current file




// In this:
// Master EJS, Dynamic Routing, And Project Setup

// setting up EJS as the templating engine
// NOTE: ejs is same as HTML but it allows us to use dynamic data
// install ejs using npm like this:
// npm install ejs
// now, setup ejs as a view engine
// so now we don't need to use res.send() to send HTML
// we can use res.render() to render EJS templates
// NOTE: for that we need to create a views folder

// setting up public static files



// Dynamic Routing: 
// steps to understand and create routes easily:
// go to user browser
// create your own route and press enter
// for example: http://localhost:3000/profile/harsh
// now create this router
// send any response
// make sure which part of the URL is repeating and add : next to that part