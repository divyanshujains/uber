const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  
    fullname: {
          firstname: { type: String, required: true, minlength:[3 , 'first name must be least 3 character long'] },
          lastname: { type: String, minlength:[3 , 'first name must be least 3 character long'] }
    },
    email: { 
        type: String,
         required: true,
          unique: true
         },

    password: {
         type: String,
         required: true,
         select: false
         },

      socketId:{
            type: String,   
         },
})

   userSchema.methods.generateAuthToken = function () {
     const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "24h",
      });
    return token;
 };
    userSchema.methods.comparePassword = async function(password){
        return await bcrypt.compare(password, this.password);
    }

       userSchema.statics.hashPassword = async function(password){
        return  await bcrypt.hash(password, 10);
    }

    const user = mongoose.model('user', userSchema);
     
    module.exports = user;
    