import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { FaHome } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthContext";

const Sidebar = () => {
  const { user, dispatch, loading, error } = useContext(AuthContext)
  const handleout = () => {
    localStorage.removeItem("USER")
    dispatch({ type: "LOGOUT" })
  }
  return (
    <div className="flex flex-col h-screen border-r border-gray-300 bg-white text-sm">
      <div className="top h-16 flex items-center justify-center">
        <Link to="/dashboard" className="logo text-lg font-bold text-indigo-700">
          Booking website
        </Link>
      </div>
      <hr className="my-2 border-t border-gray-300" />
      <div className="center px-4">
        <ul>
          <p className="title">MAIN</p>
          <li className="flex items-center py-2 cursor-pointer">
            <DashboardIcon className="icon text-indigo-700" />
            <Link to="/dashboard" className="ml-2 text-gray-800">Dashboard</Link>
          </li>
          <p className="title">LISTS</p>
          <Link to="/dashboard/users" className="text-decoration-none">
            <li className="flex items-center py-2 cursor-pointer">
              <PersonOutlineIcon className="icon text-indigo-700" />
              <span className="ml-2 text-gray-800">Users</span>
            </li>
          </Link>
          <Link to="/dashboard/hotel" className="text-decoration-none">
            <li className="flex items-center py-2 cursor-pointer">
              <StoreIcon className="icon text-indigo-700" />
              <span className="ml-2 text-gray-800">Hotels</span>
            </li>
          </Link>
          <Link to="/dashboard/room" className="text-decoration-none">
          <li className="flex items-center py-2 cursor-pointer">
            <CreditCardIcon className="icon text-indigo-700" />
            <span className="ml-2 text-gray-800">Rooms</span>
          </li>
          </Link>
          <Link to="/dashboard/Booking" className="text-decoration-none">
          <li className="flex items-center py-2 cursor-pointer">
            <LocalShippingIcon className="icon text-indigo-700" />
            <span className="ml-2 text-gray-800">Orders</span>
          </li>
          </Link>
         
          <p className="title">USEFUL</p>
          <li className="flex items-center py-2 cursor-pointer">
            <InsertChartIcon className="icon text-indigo-700" />
            <span className="ml-2 text-gray-800">Stats</span>
          </li>
          <li className="flex items-center py-2 cursor-pointer">
            <NotificationsNoneIcon className="icon text-indigo-700" />
            <span className="ml-2 text-gray-800">Notifications</span>
          </li>
          <li className="flex items-center py-2 cursor-pointer">
            <SettingsApplicationsIcon className="icon text-indigo-700" />
            <span className="ml-2 text-gray-800">Settings</span>
          </li>
          <p className="title">USER</p>
          <Link to={"/"}>
          <li className="flex items-center py-2 cursor-pointer">
          <FaHome className="text-indigo-700 text-2xl"/>
            <span className="ml-2 text-gray-800">Home</span>
          </li>
          </Link>
          <Link to={"/dashboard/profile"}>
          <li className="flex items-center py-2 cursor-pointer">
            <AccountCircleOutlinedIcon className="icon text-indigo-700" />
            <span className="ml-2 text-gray-800">Profile</span>
          </li>
          </Link>
          <li onClick={handleout} className="flex items-center py-2 cursor-pointer">
            <ExitToAppIcon className="icon text-indigo-700" />
            <span className="ml-2 text-gray-800">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
