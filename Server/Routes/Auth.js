import express from "express"
import { Allinformation, Login, Resistor } from "../Controlers/auth.js"
const authrouter = express.Router()


authrouter.post("/resistor",Resistor)
authrouter.post("/login",Login)
authrouter.get("/all",Allinformation)

export default authrouter