import express from 'express';
import Hotel from '../modules/Hotel.js';
import { AllGetHotel, DeletedHotel, SingleGetHotel, UpdateHotel, posthotel } from '../Controlers/hotel.js';
import { verifyAdmin } from '../Verify/VerifyUser.js';
const hotelsrouter = express.Router()

hotelsrouter.post("/",verifyAdmin, posthotel)
hotelsrouter.put("/:id", verifyAdmin, UpdateHotel)
hotelsrouter.delete("/:id",verifyAdmin, DeletedHotel)
hotelsrouter.get("/:id",SingleGetHotel)
hotelsrouter.get("/",AllGetHotel)

export default hotelsrouter
