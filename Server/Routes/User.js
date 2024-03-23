import express from "express"
import { AllGetUser, DeletedUser, SingleGetUser, UpdateUser,  } from "../Controlers/user.js"
import { verifyUser } from "../Verify/VerifyUser.js"

const UserRouter = express.Router()

// UserRouter.get("/right",verifyToken,async(req,res,next)=>{
//     res.send("Right user token")
// })
// UserRouter.get("/right/:id",verifyAdmin,async(req,res,next)=>{
//     res.send("Right admin")
// })

// UserRouter.get("/rights/:id",verifyUser,async(req,res,next)=>{
//     res.send("Right user ")
// })

UserRouter.put("/:id",verifyUser, UpdateUser)
UserRouter.delete("/:id",verifyUser, DeletedUser)
UserRouter.get("/:id", SingleGetUser)
UserRouter.get("/",AllGetUser)

export default UserRouter
