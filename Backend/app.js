const express = require('express');
const app = express();
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const dotenv = require('dotenv');
const cors = require("cors");
const connectDB = require("./db/db");
const cookieParser = require("cookie-parser");


dotenv.config();
app.use(cors());
connectDB();
app.use(express.json());

app.use(cookieParser());


app.use('/users', userRoutes);

app.use('/captain',captainRoutes)


 
module.exports = app;
