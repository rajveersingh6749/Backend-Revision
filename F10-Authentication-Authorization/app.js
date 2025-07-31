const express = require('express');
const app = express();


const cookieParser = require('cookie-parser');
app.use(cookieParser());

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.get('/', function (req, res) {
    let token = jwt.sign({email: "777rajveersingh@gmail.com"}, "secret")
    res.cookie("token", token)
    res.send("done")
    // console.log(token)
})

app.get('/read', function (req, res) {
    let data = jwt.verify(req.cookies.token, "secret")
    console.log(data)
})



// app.get('/', (req, res) => {
// //   res.cookie("name", "Rajveer");
// //   res.send('Cookie has been set');
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash("pololooolo", salt, function(err, hash) {
//             // Store hash in your password DB.
//             console.log(hash);
//         });
//     });
// });

// app.get('/', (req, res) => {
//     // Load hash from your password DB.
//     bcrypt.compare("pololooolo", "$2b$10$jxVw3pAQDDODmE/PaykY.OTPDHmpn.TO4fAfaC07m4.KVU2I9SHge", function(err, result) {
//         // result == true
//         console.log(result); // true or false based on the comparison
//         // res.send("Password match: " + result);
//     });
//     // res.send('Hello World');
// });

// app.get('/read', (req, res) => {
//     // console.log(req.cookies)
//     res.send("read cookie");
// });

app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
});











// Authentication and Authorization 
// How to set and cookies
// How to use bcrypt for password encryption and decryption
// What is JWT and how to store data in it and fetch it
// go to jsonwebtoken.io website