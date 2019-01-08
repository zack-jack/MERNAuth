const express = require('express');

const router = express.Router();

// Welcome
router.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

module.exports = router;
