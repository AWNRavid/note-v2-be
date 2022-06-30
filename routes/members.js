const express = require('express');
const router = express.Router();
const ControllerMembers = require('../controllers/members');

router.post('/register-2', ControllerMembers.Register_2);

module.exports = router;