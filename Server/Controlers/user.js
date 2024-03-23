
import User from "../modules/User.js"

// allUser get

export const AllGetUser = async(req,res,next)=>{
    try{
        const allUser = await User.find()
          res.status(200).json(allUser)
      }catch (err){
        next(err)
    }

}
// singleUser get
export const SingleGetUser = async(req,res,next)=>{
    try{
        const singelUser = await User.findById(req.params.id)
          res.status(200).json(singelUser)
      }catch (err){
        next(err)
    }

}
// update methods
export const UpdateUser = async(req,res,next)=>{
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateUser)
    }catch (err){
        next(err)
    }

}
// Delelted methods
export const DeletedUser = async(req,res,next)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
         res.status(200).json({messsage:"success full deleted"})
 
     }catch (err){
        next(err)
    }

}