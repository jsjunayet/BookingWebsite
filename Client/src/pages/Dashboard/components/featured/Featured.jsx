import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
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
        <p className="text-3xl">$420</p>
        <p className="text-xs text-gray-500 text-center">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="w-full flex justify-between">
          <div className="flex flex-col items-center">
            <div className="text-xs text-gray-500">Target</div>
            <div className="flex items-center">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="text-xs text-red-500">$12.4k</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs text-gray-500">Last Week</div>
            <div className="flex items-center">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="text-xs text-green-500">$12.4k</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs text-gray-500">Last Month</div>
            <div className="flex items-center">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="text-xs text-green-500">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
