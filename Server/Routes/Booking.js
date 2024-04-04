import express from "express"
import { AllGetBooking, CreateBooking, SingleGetBooking, deletedBooking } from "../Controlers/BookingControl.js"
const BookingRoute = express.Router()

BookingRoute.post("/",CreateBooking)
BookingRoute.get("/:email", SingleGetBooking)
BookingRoute.get("/",AllGetBooking)
BookingRoute.delete("/:id",deletedBooking)


export default BookingRoute