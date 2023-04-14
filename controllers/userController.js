const router = require('express').Router();
const {} = require('../authentication/auth');
const { addUser, logIn } = require('../models/userModel');


router.post('/add', addUser)
router.post('/login', logIn)


module.exports = router;