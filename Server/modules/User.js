import mongoose from 'mongoose';
const { Schema } = mongoose;
const UserSchema = new Schema({
    userName: {
        type: String,
        required:true,
    },
    userEmail:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    ProfilePik:{
        type:String
    },
    CoverPik:{
        type: String
    }
}, {timestamps:true})
export default mongoose.model("User",UserSchema)