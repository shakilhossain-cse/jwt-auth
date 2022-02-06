const express = require('express');
const router = express.Router();

const { registerController } = require('../controllers/authControllers');

router.post('/register',registerController);

module.exports = router;