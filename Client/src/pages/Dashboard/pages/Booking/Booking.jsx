import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";


const Booking = ({colums}) => {
    return (
        <div className="flex w-full">
      <Sidebar />
      <div className="flex-6">
        <Navbar/>
        <Datatable colums={colums} />
      </div>
    </div>
    );
};

export default Booking;