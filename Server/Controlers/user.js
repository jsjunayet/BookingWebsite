
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
    const userEmail = req.params.id
    try{
        const singelUser = await User.findOne({userEmail: userEmail})
        const{password, isAdmin, ...otherDetails}= singelUser._doc
          res.status(200).json({...otherDetails})
      }catch (err){
        next(err)
    }

}
// update methods
export const UpdateUser = async (req, res, next) => {
    try {
        const userEmail = req.params.id;
        console.log(userEmail)
        const updatedUser = await User.findOneAndUpdate({ userEmail }, req.body, { new: true });
        console.log(updatedUser)
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        const{password, isAdmin, ...otherDetails}= updatedUser._doc
        res.status(200).json({...otherDetails});
    } catch (err) {
        next(err);
    }
};
export const UpdateAdmin = async (req, res, next) => {
    try {
      const id = req.params.id;
      const { isAdmin } = req.body; // Get the isAdmin value from the request body
      const updatedUser = await User.findByIdAndUpdate(id, { isAdmin }, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      const { password, ...otherDetails } = updatedUser._doc;
      res.status(200).json({ ...otherDetails });
    } catch (err) {
      next(err);
    }
  };
// Delelted methods
export const DeletedUser = async(req,res,next)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
         res.status(200).json({messsage:"success full deleted"})
 
     }catch (err){
        next(err)
    }

}