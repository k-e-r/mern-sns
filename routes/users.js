const router = require('express').Router();
const User = require('../models/User');

// CRUD
// Update user information
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json('Updated the information of your account');
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res
      .status(403)
      .json('You cannot update the information of this account');
  }
});

// Delete user information
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json('Deleted the information of your account');
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res
      .status(403)
      .json('You cannot delete the information of this account');
  }
});

// Get user information
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      const { password, updatedAt, ...other } = user._doc;
      res.status(200).json(other);
    } else res.status(200).json('user not exists');
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
