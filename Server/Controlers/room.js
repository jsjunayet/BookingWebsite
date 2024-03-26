import Hotel from "../modules/Hotel.js";
import Room from "../modules/Room.js";

export const CreateRoom = async (req,res,next)=>{
    const hotelid = req.params.hotelid;
    const newRoom = new Room(req.body)
    try{
        const saveRoom = await newRoom.save()
        try{
            await Hotel.findByIdAndUpdate(hotelid,{
                $push:{rooms: saveRoom._id}
            })
        }catch(err){
            next(err)
        }
        res.status(200).json(saveRoom)

    }catch(err){
        next(err)
    }
}
export const AllGetRoom = async(req,res,next)=>{
    try{
        const allRoom = await Room.find()
          res.status(200).json(allRoom)
      }catch (err){
        next(err)
    }

}
// singleHotel get
export const SingleGetRoom = async(req,res,next)=>{
    try{
        const singelRoom = await Room.findById(req.params.id)
          res.status(200).json(singelRoom)
      }catch (err){
        next(err)
    }

}
// update methods
export const UpdateRoom = async(req,res,next)=>{
    try{
        const updateRoom = await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateRoom)
    }catch (err){
        next(err)
    }

}
export const UpdateRoomavilable = async(req,res,next)=>{

    try{
        const roomId = req.params.id;
        console.log(roomId)
        const body = req.body.dates
        console.log(body)
       await Room.updateOne({"roomNumbers._id": roomId},{
        $push:{
            "roomNumbers.$.unavailableDates" : req.body.dates}
       })
        res.status(200).json({message:"Room status has been updated"})
    }catch (err){
        next(err)
    }

}
// Delelted methods
export const DeletedRoom = async(req,res,next)=>{
    const hotelid = req.params.hotelid;
    try{
        await Room.findByIdAndDelete(req.params.id)
        try{
            await Hotel.findByIdAndUpdate(hotelid,{
                $pull:{rooms: req.params.id}
            })
        }catch(err){
            next(err)
        }
         res.status(200).json({messsage:"success full deleted"})
 
     }catch (err){
        next(err)
    }

}