const express = require('express');
const app = express();

const userModel = require('./models/user');
const postModel = require('./models/post');


app.get('/', function(req, res){
    res.send('Hello World!');
});

app.get('/create', async function(req, res) {
    let user = await userModel.create({
        username: "Rajveer",
        age: 24,
        email: "rajveersingh44204@gmail.com"
    })

    res.send(user);
});

app.get('/post/create', async function (req, res){
    let post = await postModel.create({
        postdata: "Hello, How's it going?",
        user: "688e6d425a27d2daaa3c238a"
    })

    let user = await userModel.findOne({_id: "688e6d425a27d2daaa3c238a"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user});
});

app.listen(3000, function(req, res){
    console.log("app is listening on 3000");
});