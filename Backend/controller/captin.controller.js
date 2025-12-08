const captainModel = require("../models/captin.model");
const captainservice = require("../services/captain.service");
const { validationResult } = require("express-validator");


module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);   
    if (!errors.isEmpty()) {
        return  res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, color, plate, capacity, vehicleType } = req.body;

    const captainExists = await captainModel.findOne({ email });
    if (captainExists) {
        return res.status(400).json({ message: "Captain with this email already exists" });
    }
    
    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainservice.createCaptain({
        firstname:fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color,
        plate,
        capacity,
        vehicleType,
    });

    const token = captain.generateAuthToken();
    res.status(201).json({
        message: "Captain registered successfully",
        captain,
        token,
    });


}