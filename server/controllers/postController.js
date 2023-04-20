const Post = require("../models/postModel");
const asyncHandler = require("express-async-handler");

/*
getPosts,
  setPost,
  updatePost,
  deletePost,
*/

// @desc Gets Fall blog posts
// @route GET /api/posts
// @access public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().sort({ createdAt: "desc" }).exec();
  res.status(200).json(posts);
});

/// @desc Creates new blog post
/// @route POST /api/posts
/// @access private
const setPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body.post;
  //* check fields ?

  try {
    const post = await Post.create({
      title,
      content,
    });
    console.log(post.createdAt);
    res.status(200).json({ success: true, post: post });
  } catch (error) {
    // console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
});

/// @desc Delete blog post
/// @route DELETE /api/posts
/// @access private
const deletePost = asyncHandler(async (req, res) => {
  //* checks ?

  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "removed" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = {
  setPost,
  getPosts,
  deletePost,
};
