const router = require('express').Router();
const CryptoJS = require('crypto-js');

const User = require('../models/User');

//REGISTER
router.post('/register', async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.HmacSHA1(req.body.password, process.env.SECRET_KEY),
  });

  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
