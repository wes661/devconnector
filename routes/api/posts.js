const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load validation
const validatePostInput = require("../../validation/post");

//Load post model
const Post = require("../../models/Post");

//@route  GET api/posts/test
//@desc   Test post route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "posts works" }));

//@route  POST api/posts
//@desc   Create post
//@access Private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.name,
      user: req.user.id
    });

    newPost.save().then()(post => res.json(post));
  }
);

module.exports = router;
