const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captinController = require('../controller/captin.controller');
const authmiddleware = require('../middleware/auth.middleware');



router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),  
    body('vehicle.color').isLength({ min: 3}).withMessage('colour must be at least 3 character long'),
    body('vehicle.capacity').isNumeric().withMessage('capacity must be number'),
    body('vehicle.plate').isLength({ min: 3}).withMessage('plate must be at least 3 character long'),
    body('vehicle.vehicleType').isIn(['car', 'bike', 'auto']).withMessage('vehicle type must be car, bike or auto'),
],
  captinController.registerCaptain

)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
]
,
 captinController.logincaptain
)

router.get('/profile', authmiddleware.authcaptain, captinController.getCaptainProfile);

router.get('/logout', authmiddleware.authcaptain, captinController.logoutcaptain);




module.exports = router;