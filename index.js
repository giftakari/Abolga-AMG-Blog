const express = require("express");
const app = express();
const path = require("path");
const pug = require("pug");
const { config, engine } = require("express-edge");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Connect Mongoose to our application
mongoose
  .connect("mongodb://localhost:27017/abolga-amg-blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => "DB connected!!!!!!!!!")
  .catch(err => console.log("Something went wrong", err));

// Our Middleware
app.use(express.static("public"));
app.use(engine);
app.set("views", `${__dirname}/views`);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Our routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/posts/new", (req, res) => {
  res.render("create");
});

app.post("/post/create", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/contact.html"));
});

app.get("/post", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/post.html"));
});

// Listen for incoming request
app.listen(5000, () => console.log("App is running at port 5000"));
