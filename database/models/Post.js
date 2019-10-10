const mongoose = require("mongoose");

//Initialize our Schema
const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
