import express from "express"
import { Login, Resistor } from "../Controlers/auth.js"
const authrouter = express.Router()


authrouter.post("/resistor",Resistor)
authrouter.get("/login",Login)

export default authrouter