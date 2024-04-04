import express from "express"
import { AllGetBooking, CreateBooking, SingleGetBooking } from "../Controlers/BookingControl.js"
const BookingRoute = express.Router()

BookingRoute.post("/",CreateBooking)
BookingRoute.get("/:id", SingleGetBooking)
BookingRoute.get("/",AllGetBooking)
// BookingRoute.delete("/:id",verifyUser, DeletedUser)


export default BookingRoute