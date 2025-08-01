const express = require('express');
const app = express();

const userModel = require('./models/user');
const jwt = require('jsonwebtoken');
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const { hash } = require('crypto');



app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());  



app.get('/', function (req, res) {
    res.render("index");
});

app.post('/create', (req, res) => {
    let {username, email, password, age} = req.body;

    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(password, salt, async (err, hash) => {
            // console.log(hash)
            let createdUser = await userModel.create({
                username,
                email,
                password: hash,
                age
            })

            let token = jwt.sign({email}, "shhhhhhhh");
            res.cookie("token", token);

            res.send(createdUser);
        })
    })

});

app.get('/login', function(req, res) {
    res.render('login');
});


app.post('/login', async function (req, res) {
    let user = await userModel.findOne({email: req.body.email});
    if(!user) return res.send("Something went wrong");

    bcrypt.compare(req.body.password, user.password, function(err, result) {
        if(result){
            let token = jwt.sign({email: user.email}, "shhhhhhhh");
            res.cookie("token", token);
            res.send("Yes, You can login!");
        } 
            
        else res.send("You can't login!");
    });
});

app.get('/logout', (req, res) => {
    res.cookie("token", "");
    res.redirect('/');
});


app.listen(3000, () => {
    console.log("App is running on localhost://3000");
});





// create user account
    // monoose
    // schema
    // model
    // userCreate -> password -> hash
    // jwt -> cookie
    // login -> token -> dcrypt -> email