const express = require('express');
const router = express.Router();
const config = require('config');

const User = require('../../models/User');

// @route    POST api/users/
// @desc     create new user
// @access   Public

router.post('/', async (req, res) => {
  try {
    const userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };
    const user = await User.create(userData);
    console.log(user);
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
