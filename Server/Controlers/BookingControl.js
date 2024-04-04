import Booking from "../modules/Booking.js"

export const AllGetBooking = async(req,res,next)=>{
    try{
        const allBooking = await Booking.find()
          res.status(200).json(allBooking)
      }catch (err){
        next(err)
    }

}
export const CreateBooking = async(req,res,next)=>{
    const newBooking = new Booking(req.body)
    try{
        const allcreate = await newBooking.save()
        res.status(200).json(allcreate)

    }catch (err){
        next(err)
    }
}
export const SingleGetBooking= async(req,res,next)=>{
    try{
        const singelUser = await User.find(req.params.email)
          res.status(200).json(singelUser)
      }catch (err){
        next(err)
    }

}