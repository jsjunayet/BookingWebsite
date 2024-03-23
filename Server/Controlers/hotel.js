import { createError } from "../Utiltes/CreateError.js"
import Hotel from "../modules/Hotel.js"

// post methos
export const posthotel = async(req,res,next)=>{
    const newHotel = new Hotel(req.body)
    try{
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)

    }catch (err){
        next(err)
    }

}
// allhotel get
export const AllGetHotel = async(req,res,next)=>{
    try{
        const allHOtel = await Hotel.find()
          res.status(200).json(allHOtel)
      }catch (err){
        next(err)
    }

}
// singleHotel get
export const SingleGetHotel = async(req,res,next)=>{
    try{
        const singelHOtel = await Hotel.findById(req.params.id)
          res.status(200).json(singelHOtel)
      }catch (err){
        next(err)
    }

}
// update methods
export const UpdateHotel = async(req,res,next)=>{
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateHotel)
    }catch (err){
        next(err)
    }

}
// Delelted methods
export const DeletedHotel = async(req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
         res.status(200).json({messsage:"success full deleted"})
 
     }catch (err){
        next(err)
    }

}