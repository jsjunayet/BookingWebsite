import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import useFetch from "../../../../Hook/useFetch";
import { useEffect, useState } from "react";

const Featured = () => {
  const { data, loading, error, refetch } = useFetch(`https://bookingwebsite-2.onrender.com/api/Booking`)
  const [salesData, setSalesData] = useState({
    todaySales: 0,
    lastWeekSales: 0,
    lastMonthSales: 0
});

useEffect(() => {
    const calculateSales = () => {
        const now = new Date();
        const startOfToday = new Date(now);
        startOfToday.setUTCHours(0, 0, 0, 0);

        const startOfWeek = new Date(now);
        startOfWeek.setDate(startOfWeek.getDate() - 7);
        startOfWeek.setUTCHours(0, 0, 0, 0);

        const startOfMonth = new Date(now);
        startOfMonth.setMonth(startOfMonth.getMonth() - 1);
        startOfMonth.setUTCHours(0, 0, 0, 0);

        let todaySales = 0;
        let lastWeekSales = 0;
        let lastMonthSales = 0;

        data.forEach(item => {
            const createdAt = new Date(item.createdAt);

            if (createdAt >= startOfToday) {
                todaySales += item.price;
            }
            if (createdAt >= startOfWeek) {
                lastWeekSales += item.price;
            }
            if (createdAt >= startOfMonth) {
                lastMonthSales += item.price;
            }
        });

        setSalesData({
            todaySales,
            lastWeekSales,
            lastMonthSales
        });
    };

    calculateSales();
}, []);
  
  return (
    <div className="flex-2 bg-white shadow-md p-10">
      <div className="flex items-center justify-between text-gray-500">
        <h1 className="text-lg font-semibold">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="py-20 flex flex-col items-center justify-center space-y-5">
        <div className="w-20 h-20">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="text-gray-500 text-lg font-semibold">Total sales made today</p>
        <p className="text-3xl">500tk</p>
        <p className="text-xs text-gray-500 text-center">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="w-full flex justify-between">
          <div className="flex flex-col items-center">
            <div className="text-xs text-gray-500">Target</div>
            <div className="flex items-center">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="text-xs text-red-500">100000k</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs text-gray-500">Last Week</div>
            <div className="flex items-center">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="text-xs text-green-500">12000tk</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs text-gray-500">Last Month</div>
            <div className="flex items-center">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="text-xs text-green-500">1000000tk</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
