import express from "express"
import { AllGetBooking, CreateBooking, SingleGetBooking, deletedBooking, latestBooking, totalBooking } from "../Controlers/BookingControl.js"
const BookingRoute = express.Router()

BookingRoute.post("/",CreateBooking)
BookingRoute.get("/:email", SingleGetBooking)
BookingRoute.get("/",AllGetBooking)
BookingRoute.delete("/:id",deletedBooking)
BookingRoute.get("/selles/man",totalBooking)
BookingRoute.get("/selles/latest",latestBooking)


export default BookingRoute