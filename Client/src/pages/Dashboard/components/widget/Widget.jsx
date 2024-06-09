import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type, count, amount }) => {
  let data;

  // Temporary data
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        count: count,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        count: count, // Use the count prop
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        amount: amount, // Use the amount prop
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        amount: amount, // Use the amount prop
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget flex justify-between p-4 shadow-lg rounded-lg h-24">
      <div className="left">
        <span className="font-bold text-gray-600 text-sm">{data.title}</span>
        <span className="text-2xl font-light">{data.isMoney && "$"} {data.amount ? data.amount : data.count}</span> {/* Display amount or count */}
        <span className="text-xs text-gray-500">{data.link}</span>
      </div>
      <div className="right flex flex-col justify-between items-end">
        <div className={`text-sm flex items-center ${diff > 0 ? 'text-green-500' : 'text-red-500'}`}>
          <KeyboardArrowUpIcon className="mr-1" />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;

