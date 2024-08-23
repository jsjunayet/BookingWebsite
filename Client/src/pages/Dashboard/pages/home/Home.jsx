import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from "../../components/featured/Featured"
import Table from '../../components/table/Table';
import Chart from "../../components/chart/Chart"
import useFetch from '../../../../Hook/useFetch';

const Home = () => {
  const { data, loading, error, refetch } = useFetch(`https://bookingwebsite-2.onrender.com/api/Booking`)
  const { data:latest } = useFetch(`https://bookingwebsite-2.onrender.com/api/Booking//selles/latest`)
  const { data: datas, } = useFetch(`https://bookingwebsite-2.onrender.com/api/auth/all`)
  const total = data.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue.price), 0);
  console.log(latest)
  
  // Define the parameters
  const orderCount = datas.order;
  const userCount = datas.user;
  const earnings = total;
  const balance = total + 10000;

  return (
    <div className="flex">
      <div className=''>
        <Sidebar />
      </div>
      <div className="flex-6">
        <Navbar />
        <div className="flex flex-wrap p-4">
          {/* Pass parameters to each Widget */}
          <Widget type="user" count={userCount} />
          <Widget type="order" count={orderCount} />
          <Widget type="earning" amount={earnings} />
          <Widget type="balance" amount={balance} />
        </div>
        <div className="flex flex-wrap p-4 gap-5">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="p-4">
          <div className="bg-white shadow-md p-4 rounded-md">
            <div className="font-bold text-gray-700 text-lg mb-4">Latest Transactions</div>
            <Table rows={latest} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
