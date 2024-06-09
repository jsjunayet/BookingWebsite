import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";
import Chart from "../../components/chart/Chart";

const Single = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-6">
        <Navbar />
        <div className="p-5">
          <div className="flex gap-20">
            <div className="flex-1 relative bg-white shadow-md p-5">
              <div className="absolute top-0 right-0 p-2 text-xs text-blue-500 bg-blue-100 rounded-br">
                Edit
              </div>
              <h1 className="text-xl font-semibold text-gray-500 mb-5">Information</h1>
              <div className="flex items-center mt-20 gap-5">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt=""
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className=" text-sm">
                  <h1 className="text-lg font-semibold">Jane Doe</h1>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-gray-600">Email:</span>
                      <span>janedoe@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-gray-600">Phone:</span>
                      <span>+1 2345 67 89</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-gray-600">Address:</span>
                      <span>Elton St. 234 Garden Yd. NewYork</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-gray-600">Country:</span>
                      <span>USA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-2">
            <Chart title="User Spending (Last 6 Months)" aspect={2 / 1} />
            </div>
          </div>
          <div className="bg-white shadow-md p-5 mt-5">
            <h1 className="text-xl font-semibold text-gray-500 mb-5">Last Transactions</h1>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
