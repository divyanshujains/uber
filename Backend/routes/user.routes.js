const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controller/user.controller');
const authmiddleware = require('../middleware/auth.middleware');
const user = require('../models/user.model');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'), 
],
userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min : 6}).withMessage('Password is required'),
],
userController.loginUser    

)

router.get('/profile',authmiddleware.authuser, userController.getUserProfile);

router.get('/logout',authmiddleware.authuser,userController.logoutUser); 


module.exports = router;        