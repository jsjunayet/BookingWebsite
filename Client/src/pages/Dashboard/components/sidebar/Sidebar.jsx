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
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen border-r border-gray-300 bg-white text-sm">
      <div className="top h-16 flex items-center justify-center">
        <Link to="/" className="logo text-lg font-bold text-indigo-700">
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
          <Link to="/dashboard/products" className="text-decoration-none">
            <li className="flex items-center py-2 cursor-pointer">
              <StoreIcon className="icon text-indigo-700" />
              <span className="ml-2 text-gray-800">Products</span>
            </li>
          </Link>
          <li className="flex items-center py-2 cursor-pointer">
            <CreditCardIcon className="icon text-indigo-700" />
            <span className="ml-2 text-gray-800">Orders</span>
          </li>
          <li className="flex items-center py-2 cursor-pointer">
            <LocalShippingIcon className="icon text-indigo-700" />
            <span className="ml-2 text-gray-800">Delivery</span>
          </li>a
          <p className="title">USEFUL</p>
          <li className="flex items-center py-2 cursor-pointer">
            <InsertChartIcon className="icon text-indigo-700" />
            <span className="ml-2 text-gray-800">Stats</span>
          </li>
          <li className="flex items-center py-2 cursor-pointer">
            <NotificationsNoneIcon className="icon text-indigo-700" />
            <span className="ml-2 text-gray-800">Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li className="flex items-center py-2 cursor-pointer">
            <SettingsSystemDaydreamOutlinedIcon className="icon text-indigo-700" />
            <span className="ml-2 text-gray-800">System Health</span>
          </li>
          <li className="flex items-center py-2 cursor-pointer">
            <PsychologyOutlinedIcon className="icon text-indigo-700" />
            <span className="ml-2 text-gray-800">Logs</span>
          </li>
          <li className="flex items-center py-2 cursor-pointer">
            <SettingsApplicationsIcon className="icon text-indigo-700" />
            <span className="ml-2 text-gray-800">Settings</span>
          </li>
          <p className="title">USER</p>
          <li className="flex items-center py-2 cursor-pointer">
            <AccountCircleOutlinedIcon className="icon text-indigo-700" />
            <span className="ml-2 text-gray-800">Profile</span>
          </li>
          <li className="flex items-center py-2 cursor-pointer">
            <ExitToAppIcon className="icon text-indigo-700" />
            <span className="ml-2 text-gray-800">Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom mt-auto mx-4">
        <div
          className="colorOption w-6 h-6 border border-indigo-700 cursor-pointer mb-2"
        ></div>
        <div
          className="colorOption w-6 h-6 bg-gray-800 border border-indigo-700 cursor-pointer mb-2"
        ></div>
        <div
          className="colorOption w-6 h-6 bg-blue-900 border border-indigo-700 cursor-pointer"
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
