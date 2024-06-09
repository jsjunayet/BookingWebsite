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
        const singelUser = await Booking.find({email : req.params.email})
          res.status(200).json(singelUser)
      }catch (err){
        next(err)
    }

}
export const totalBooking = async (req, res, next) => {
    const startOfDay = date => {
        date.setUTCHours(0, 0, 0, 0);
        return date;
    };
    
    try {
        const today = new Date();
        const startToday = startOfDay(new Date());
        const endToday = new Date(startToday);
        endToday.setDate(endToday.getDate() + 1);

        // Calculate last week
        const lastWeekStart = startOfDay(new Date(today));
        lastWeekStart.setDate(lastWeekStart.getDate() - 7);
        const lastWeekEnd = new Date(lastWeekStart);
        lastWeekEnd.setDate(lastWeekEnd.getDate() + 7);

        // Calculate last month
        const lastMonthStart = startOfDay(new Date(today));
        lastMonthStart.setMonth(lastMonthStart.getMonth() - 1);
        const lastMonthEnd = new Date(lastMonthStart);
        lastMonthEnd.setMonth(lastMonthEnd.getMonth() + 1);

        const [todaySales, lastWeekSales, lastMonthSales] = await Promise.all([
            Booking.aggregate([
                { $match: { createdAt: { $gte: startToday, $lt: endToday } } },
                {
                    $group: {
                        _id: null,
                        totalSales: { $sum: "$price" }
                    }
                }
            ]),
            Booking.aggregate([
                { $match: { createdAt: { $gte: lastWeekStart, $lt: startToday } } },
                {
                    $group: {
                        _id: null,
                        totalSales: { $sum: "$price" }
                    }
                }
            ]),
            Booking.aggregate([
                { $match: { createdAt: { $gte: lastMonthStart, $lt: startToday } } },
                {
                    $group: {
                        _id: null,
                        totalSales: { $sum: "$price" }
                    }
                }
            ])
        ]);

        res.json({
            todaySales: todaySales[0]?.totalSales || 0,
            lastWeekSales: lastWeekSales[0]?.totalSales || 0,
            lastMonthSales: lastMonthSales[0]?.totalSales || 0
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const latestBooking = async (req, res, next) => {
        try {
          const latestBookings = await Booking.find().sort({ createdAt: -1 }).limit(5);
          res.json(latestBookings);
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      
}


export const deletedBooking = async (req, res, next) => {
    try {
        const deleted = await Booking.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.status(200).json({ message: "Booking deleted successfully" });
    } catch (err) {
        next(err);
    }
};