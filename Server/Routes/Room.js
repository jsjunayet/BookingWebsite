import express from 'express';
import { verifyAdmin } from '../Verify/VerifyUser.js';
import { AllGetRoom, CreateRoom, DeletedRoom, SingleGetRoom, UpdateRoom } from '../Controlers/room.js';
const Roomsrouter = express.Router()

Roomsrouter.post("/:hotelid", CreateRoom)
Roomsrouter.put("/:id", verifyAdmin, UpdateRoom)
Roomsrouter.delete("/:id/:hotelid", DeletedRoom)
Roomsrouter.get("/:id",SingleGetRoom)
Roomsrouter.get("/",AllGetRoom)

export default Roomsrouter