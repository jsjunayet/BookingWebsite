import express from 'express';
import Hotel from '../modules/Hotel.js';
import { AllGetCountCity, AllGetCountTpye, AllGetHotel, DeletedHotel,    GetHotelRoom,    SingleGetHotel, UpdateHotel, posthotel } from '../Controlers/hotel.js';
import { verifyAdmin } from '../Verify/VerifyUser.js';
const hotelsrouter = express.Router()

hotelsrouter.post("/", posthotel)
hotelsrouter.put("/:id", verifyAdmin, UpdateHotel)
hotelsrouter.delete("/find/:id",verifyAdmin, DeletedHotel)
hotelsrouter.get("/get/:id",SingleGetHotel)
hotelsrouter.get("/",AllGetHotel)
hotelsrouter.get("/room/:id",GetHotelRoom)
hotelsrouter.get("/countByCity",AllGetCountCity)
hotelsrouter.get("/countBytype",AllGetCountTpye)

export default hotelsrouter
