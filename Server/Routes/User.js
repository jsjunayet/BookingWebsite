import express from "express"
import { AllGetUser, DeletedUser, SingleGetUser, UpdateUser,  } from "../Controlers/user.js"
import { verifyUser } from "../Verify/VerifyUser.js"

const UserRouter = express.Router()


UserRouter.put("/:id", UpdateUser)
UserRouter.delete("/:id",verifyUser, DeletedUser)
UserRouter.get("/:id", SingleGetUser)
UserRouter.get("/",AllGetUser)

export default UserRouter
