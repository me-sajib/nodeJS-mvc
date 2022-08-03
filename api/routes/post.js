const postRoute = require("express").Router();
const PostController = require("../controllers/Post");

postRoute.get("/", PostController.postFetchController);

postRoute.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: "Post Id fetched successfully" + id,
  });
});

postRoute.post("/", PostController.newPostController);

module.exports = postRoute;
