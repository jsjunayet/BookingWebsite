
import { createError } from "../Utiltes/CreateError.js"
import Hotel from "../modules/Hotel.js"
import Room from "../modules/Room.js"

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

export const AllGetHotel = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    console.log(min, max);

    try {
        // Convert min and max to numbers
        const minPrice = min !== undefined ? parseInt(min) : 1;
        const maxPrice = max !== undefined ? parseInt(max) : 999;

        const allHotels = await Hotel.find({ ...others, price: { $gt: minPrice, $lt: maxPrice } }).limit(parseInt(req.query.limit));
        res.status(200).json(allHotels);
    } catch (err) {
        next(err);
    }
};
// count by city
export const AllGetCountCity = async(req,res,next)=>{
    const cities = req.query.cities.split(",")
    try{
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({ city : city})
        }))
      
          res.status(200).json(list)
      }catch (err){
        next(err)
    }

}
export const AllGetCountTpye = async(req,res,next)=>{
    
    try{
        const hotelCount = await Hotel.countDocuments({type:"hotel"})
        const apartmentCount = await Hotel.countDocuments({type:"apartment"})
        const resortCount = await Hotel.countDocuments({type:"resort"})
        const villasCount = await Hotel.countDocuments({type:"villas"})
        const cabinCount = await Hotel.countDocuments({type:"cabin"})
      
          res.status(200).json([
            {type: "hotel",count: hotelCount},
            {type: "apartment",count: apartmentCount},
            {type: "resort",count: resortCount},
            {type: "villas",count: villasCount},
            {type: "cabin",count: cabinCount}
        ])
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
export const GetHotelRoom = async(req,res,next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        const list = await Promise.all(hotel.rooms.map((room)=>{
            return Room.findById(room)
        }))
        res.status(200).json(list)

    }catch(err){
        next(err)
    }
}