const captainModel = require("../models/captain.model");
const captainservice = require("../services/captain.service");
const { validationResult } = require("express-validator");
const authmiddleware = require("../middleware/auth.middleware");
const blacklistedTokenModel  = require("../models/blacklistToken.model");


module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);   
    if (!errors.isEmpty()) {
        return  res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;

    const captainExists = await captainModel.findOne({ email });
    if (captainExists) {
        return res.status(400).json({ message: "Captain with this email already exists" });
    }
    
    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainservice.createCaptain({
        fullname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity, 
        vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken();
     res.cookie("captaintoken", token);
    res.status(201).json({
        message: "Captain registered successfully",
        captain,
        token,
    });


}


module.exports.logincaptain = async (req, res, next) => {
    const errors = validationResult(req);   
    if (!errors.isEmpty()) {
        return  res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select("+password");
  
    console.log(captain);   

    if (!captain) {
        return res.status(401).json({ message: "Invalid email or password" });
    }
    const isPasswordValid = await captain.comparePassword(password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = captain.generateAuthToken();
    res.cookie("captaintoken", token )
    res.status(200).json({
        message: "Login successful",
       captain,
        token,
    });

}

module.exports.getCaptainProfile = async (req, res, next) => {
    const captain = req.captain;
    res.status(200).json({
        captain,
    });
}

module.exports.logoutcaptain = async (req, res, next) => {
    const token = req.cookies.token || req.header("Authorization").split(" ")[1];
   
    await blacklistedTokenModel.create({ token });
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });  
}