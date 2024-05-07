import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from "../../components/featured/Featured"
import Table from '../../components/table/Table';
import Chart from "../../components/chart/Chart"

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-6">
        <Navbar />
        <div className="flex flex-wrap p-4">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="flex flex-wrap p-4 gap-5">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="p-4">
          <div className="bg-white shadow-md p-4 rounded-md">
            <div className="font-bold text-gray-700 text-lg mb-4">Latest Transactions</div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
