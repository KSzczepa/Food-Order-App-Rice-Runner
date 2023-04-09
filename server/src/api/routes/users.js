const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');


router.post('/:val', userController.addUser);

module.exports = router;