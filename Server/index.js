import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser"
import cors from "cors"
import authrouter from "./Routes/Auth.js";
import hotelsrouter from "./Routes/Hotels.js";
import UserRouter from "./Routes/User.js";
import Roomsrouter from "./Routes/Room.js";
import BookingRoute from "./Routes/Booking.js";
const PORT = process.env.PORT || 5000;


const app = express();
dotenv.config();

app.use(cookieParser());
app.use(express.json());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};
// Middleware
app.use(cors());
app.get("/",(req,res)=>{
  res.send("Booking webiste")
})


// Routes
app.use("/api/auth", authrouter);
app.use("/api/hotel", hotelsrouter);
app.use("/api/users", UserRouter);
app.use("/api/room", Roomsrouter);
app.use("/api/Booking", BookingRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";

  return res.status(errorStatus).json({
    success: false,
    errorStatus: errorStatus,
    errorMessage: errorMessage,
    stack: err.stack,
  });
});

// mongoose.connection.on('disconnected', () => {
//   console.log("Disconnected from MongoDB");
// });
app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
