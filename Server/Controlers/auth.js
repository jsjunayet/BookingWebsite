import { createError } from "../Utiltes/CreateError.js";
import User from "../modules/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const Resistor = async(req,res,next)=>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newResistor = new User({
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        password: hash,
    })
    try{
        await newResistor.save();
        const userWithoutPassword = {
            userName: newResistor.userName,
            userEmail: newResistor.userEmail,
            isAdmin: newResistor.isAdmin,
            createdAt: newResistor.createdAt,
            updatedAt: newResistor.updatedAt
        };
        res.status(200).json({ user: userWithoutPassword, message: "Successfully registered" });
    }catch (err){
        next(err)
    }
}

export const Login = async(req,res,next)=>{
  
    try{
        const user = await User.findOne({userEmail: req.body.userEmail})
        if(!user) return next(createError(404, "Please Correct Email"));
        const isPassword = await bcrypt.compare(req.body.password, user.password )
        if(!isPassword) return next(createError(404, "Please Correct Password"))
        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin }, process.env.JWT_SCRET);
        const{password, isAdmin, ...otherDetails}= user._doc
        res.cookie("access_token",token,{httpOnly:true}).status(200).json({...otherDetails})
    }catch (err){
        next(err)
    }
}