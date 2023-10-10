const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

//to login
router.get('/login',studentController.loginPage);
//to show and find result
router.post('/viewresult',studentController.findResult)
module.exports = router;