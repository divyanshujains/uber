const express = require('express');
const app = express();
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const dotenv = require('dotenv');
const cors = require("cors");
const connectDB = require("./db/db");
const cookieParser = require("cookie-parser");


dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true, // allow cookies
  })
);
connectDB();
app.use(express.json());

app.use(cookieParser());


app.use('/user', userRoutes);

app.use('/captain',captainRoutes)


 
module.exports = app;
