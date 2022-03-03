var express = require("express");
var router = express.Router();
// const { route } = require("express/lib/application");
const { checkIsEmpty, jwtMiddleware } = require("../../utils/index");

const {
  createPost,
  getAllPosts,
  updatePost,
  deletePost,
} = require("./controller/postsController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("hello from the post router");
});

router.post("/create-post", checkIsEmpty, jwtMiddleware, createPost);

router.get("/get-all-posts", jwtMiddleware, getAllPosts);

router.put("/update-post", jwtMiddleware, checkIsEmpty, updatePost); // CANNOT update owner

router.delete("/delete-post", jwtMiddleware, deletePost);

// you can update the items, name, and amount

module.exports = router;
