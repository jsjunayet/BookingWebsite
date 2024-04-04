import mongoose from 'mongoose';
const { Schema } = mongoose;

const BookingSchema = new Schema({
    RoomName: {
        type: String
    },
    price: {
        type: Number
    },
    email: {
        type: String
    },
    Duration: {
        type: Number
    },
    img: {
        type: String
    },
    endDate: {
        type: Date
    },
    startDate: {
        type: Date 
    },
    City: {
        type: String
    },
    selectedRoomNumbers:{
        type:[String]
    }

}, { timestamps: true });

export default mongoose.model("Booking", BookingSchema);
