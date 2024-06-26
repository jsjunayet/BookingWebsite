import jwt from 'jsonwebtoken';
import { createError } from '../Utiltes/CreateError.js';

 export const verifyToken = async(req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token) return next(createError(401, "Not authentication User"))
    jwt.verify(token, process.env.JWT_SCRET, (err, user)=>{
    if(err) return next(createError(403, "This Token isn't correct"))
    req.user = user
    next()
     })
}

export const verifyUser = async (req,res,next)=>{
   verifyToken(req,res,()=>{
      if(req.user.id === req.params.id || req.user.isAdmin){
         return next()
      }
      else{
         return next(createError(401, "This is correct User"))
      }
   })
}
export const verifyAdmin = async (req,res,next)=>{
   verifyToken(req,res,()=>{
      if(req.user.isAdmin){
         return next()
      }
      else{
         return next(createError(401, "This is not correct admin"))
      }
   })
}