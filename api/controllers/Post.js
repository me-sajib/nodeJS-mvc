const Post = require("../models/Post");

const postFetchController = (req, res, next) => {
  Post.find()
    .then((posts) => {
      res.status(200).json({
        message: "All Posts",
        posts,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error",
        err,
      });
    });
};

const newPostController = (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    date: req.body.date,
  });
  post
    .save()
    .then((data) => {
      res.status(201).json({
        message: "Post added successfully",
        post: data,
      });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  postFetchController,
  newPostController,
};
