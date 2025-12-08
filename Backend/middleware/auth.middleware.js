const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const blacklistedTokenModel  = require("../models/blacklistToken.model");


module.exports.authuser = async (req, res,  next)=>{
    const token = req.cookies.token || req.header("Authorization").split(" ")[1];   
    if(!token){
        return res.status(401).json({message : "Access denied. No token provided"});
    }

    const isblacklisted = await blacklistedTokenModel.findOne({token:token});
    if(isblacklisted){
        return res.status(401).json({message : "Access denied. Token is blacklisted"});
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = await userModel.findById(decode._id)
        next();

        
    } catch (error) {
        return res.status(400).json({message : "unauthorized access. Invalid token"});
        
    }
     



}


