const express = require('express');
const auth = require('../controllers/auth');

const router = express.Router();

// Register new user
router.post('/register', auth.register);

module.exports = router;
