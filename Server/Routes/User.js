import express from "express"
import { AllGetUser, DeletedUser, SingleGetUser, UpdateAdmin, UpdateUser,  } from "../Controlers/user.js"
import { verifyUser } from "../Verify/VerifyUser.js"

const UserRouter = express.Router()


UserRouter.put("/:id", UpdateUser)
UserRouter.patch("/admin/:id", UpdateAdmin)
UserRouter.delete("/:id", DeletedUser)
UserRouter.get("/:id", SingleGetUser)
UserRouter.get("/",AllGetUser)

export default UserRouter
