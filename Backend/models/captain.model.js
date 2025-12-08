const mongoose = require('mongoose');
const { populate } = require('./user.model');

const captinSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "first name must be least 3 character long"],
    },
    lastname: {
      type: String,
      minlength: [3, "first name must be least 3 character long"],
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },

  status: {
    type: String,
    enum: ["active", "unactive"],
    default: "unactive",
  },

  vehicle: {
    color: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },

    plate: {
      type: String,
      required: true,
    },
    vehicleType: {
      type: String,
      enum: ["car", "bike", "auto"],
      required: true,
    },
  },

    location: {
        ltd: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    },


});

 captainSchema.methods.generateAuthToken = function () {
      const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, {
       expiresIn: "24h",
       });
     return token;
    };  


    captinSchema.methods.comparePassword = async function(password){
         return await bcrypt.compare(password, this.password);
     }  

     captinSchema.statics.hashPassword = async function(password){
         return  await bcrypt.hash(password, 10);
     }


      const captainModel = mongoose.model('captain', captinSchema);
       
      module.exports = captainModel;