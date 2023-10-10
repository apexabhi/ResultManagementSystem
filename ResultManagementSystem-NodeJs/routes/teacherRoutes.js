//teacher routes
const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');
const auth=require("../middleware/auth");
//login routes
router.get('/login',teacherController.loginPage);
router.post('/login',teacherController.login)
//signup routes
router.get('/signup',teacherController.signupPage);
router.post('/signup',teacherController.signup)
//show all record routes
router.get('/viewall',auth,teacherController.viewall);
//add a record route
router.post('/addRecords',auth,teacherController.addRecords);
router.get('/addRecords',auth,teacherController.addRecordsPage);
//delete a record route
router.get('/delete/:id',auth,teacherController.delRecord);
//to edit record route
router.get('/edit/:id',auth,teacherController.editRecordPage);
router.post('/edit/:id',auth,teacherController.editRecordFunc);
//to logout
router.get('/logout',teacherController.logout);
module.exports = router;