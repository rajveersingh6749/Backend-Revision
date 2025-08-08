const express = require("express");
const app = express();

const userModel = require("./models/user");
const postModel = require("./models/post");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' });
const path = require("path");
const upload = require('./config/multerconfig');
const user = require("./models/user");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))
app.use(cookieParser());


// copied from npm multer and made some modifications
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/images/uploads')
//   },
//   filename: function (req, file, cb) {
//     crypto.randomBytes(12, function(err, bytes) {
//       const fn = bytes.toString("hex") + path.extname(file.originalname);
//       cb(null, fn)
//     })
//   }
// })

// const upload = multer({ storage: storage })
// -------

// Industry Standards: commented out all multer code and made a config folder


app.get("/", function (req, res) {
  res.render("index");
});

app.get("/profile/upload", function (req, res) {
  res.render("profileupload");
});

app.post("/upload", isLoggedIn, upload.single("image"), async function (req, res) {
  let user = await userModel.findOne({email: req.user.email});
  user.profilepic = req.file.filename;
  await user.save();
  res.redirect("/profile");
});

// app.get('/test', (req, res) => {
//   res.render("test");
// })

// app.post('/upload', upload.single("image"), (req, res) => {
//   console.log(req.file);
// });

app.get('/login', function (req, res) {
  res.render("login");
});

app.get('/profile', isLoggedIn, async function(req, res){
  let user = await userModel.findOne({email: req.user.email}).populate("posts");
  res.render("profile", {user});
});

app.get('/like/:id', isLoggedIn, async function(req, res){
  let post = await postModel.findOne({_id: req.params.id}).populate("user");

  if(post.likes.indexOf(req.user.userid) === -1){
    post.likes.push(req.user.userid);
  }
  else{
    post.likes.splice(post.likes.indexOf(req.user.userid), 1);
  }
  await post.save()
  res.redirect("/profile");
});

app.get('/edit/:id', isLoggedIn, async function(req, res){
  let post = await postModel.findOne({_id: req.params.id}).populate("user");

  res.render("edit", {post});
});

app.post('/update/:id', isLoggedIn, async function(req, res){
  let post = await postModel.findOneAndUpdate({_id: req.params.id}, {content: req.body.content});

  res.redirect("/profile");
});

app.post('/post', isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({email: req.user.email});

  let { content } = req.body;

  let post = await postModel.create({
    user: user._id,
    content
  });

  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
});

app.post("/register", async (req, res) => {
  let { email, password, username, name, age } = req.body;

  let user = await userModel.findOne({ email });
  if (user) return res.status(500).send("User already registered!");

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      // Store hash in your password DB.
      let user = await userModel.create({
        username,
        name,
        email,
        age,
        password: hash,
      });

      let token = jwt.sign({ email: email, userid: user._id }, "shhhh");
      res.cookie("token", token);
      res.send("registered");
    });
  });
});


app.post("/login", async (req, res) => {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email });
  if (!user) return res.status(500).send("Something went wrong!");

  bcrypt.compare(password, user.password, function(err, result){
    if(result){
      let token = jwt.sign({ email: email, userid: user._id }, "shhhh");
      res.cookie("token", token);
      res.status(200).redirect("/profile");
    }
    else res.redirect("/login");
  })
});

app.get('/logout', (req, res) => {
  res.cookie("token", "");
  res.redirect('/login');
});

// this is called protected route
function isLoggedIn(req, res, next){
  if(!req.cookies.token) return res.redirect("/login");
  try {
    let data = jwt.verify(req.cookies.token, "shhhh");
    req.user = data;
    next();
  } catch (err) {
    return res.redirect("/login");
  }
}

app.listen(3000, function (req, res) {
  console.log("This app is listening on 3000");
});

// users will be writing posts
// login and register
// logout
// post creation
// post like
// post delete
