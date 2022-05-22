const router = require('express').Router();
const Post = require('../models/Post');

// make a post
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// update a post
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({
        $set: req.body,
      });
      return res.status(200).json('Updated succeeded');
    } else {
      return res.status(403).json("You cannot edit other person's post");
    }
  } catch (err) {
    return res.status(403).json(err);
  }
});

module.exports = router;
