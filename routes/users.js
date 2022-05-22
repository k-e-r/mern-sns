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

module.exports = router;
