const express = require("express");
const app = express();
const path = require("path");
const pug = require("pug");
const { config, engine } = require("express-edge");
const mongoose = require("mongoose");

// Our Middleware
app.use(express.static("public"));
app.use(engine);
app.set("views", `${__dirname}/views`);

//Our routes
app.get("/", (req, res) => {
  res.render("index");
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
