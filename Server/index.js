import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authrouter from "./Routes/Auth.js";
import hotelsrouter from "./Routes/Hotels.js";
import cookieParser from "cookie-parser"
import UserRouter from "./Routes/User.js";
import Roomsrouter from "./Routes/Room.js";
const app = express()
dotenv.config()

app.use(cookieParser())
app.use(express.json())


const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connect Mongodb")
      } catch (error) {
        throw(error);
      }
}

// middleware
app.use("/api/auth", authrouter)
app.use("/api/hotel", hotelsrouter)
app.use("/api/user", UserRouter)
app.use("/api/room", Roomsrouter)

app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500
  const errorMassage = err.message || "some thing is wrong"

  return res.status(errorStatus).json({
    success:false,
    errStatus:errorStatus,
    errmessage: errorMassage,
    stack: err.stack,
  })
})

mongoose.connection.on('disconnected', ()=>{
    console.log("disconnected mongodb")
})

app.listen(5000, ()=>{
    connect()
    console.log("connect Backend");
})
