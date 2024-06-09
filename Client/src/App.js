import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import DashboardHome from "./pages/Dashboard/pages/home/Home.jsx";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List.jsx";
import DashboardList from "./pages/Dashboard/pages/list/List.jsx";
import Login from "./components/Login/Login";
import Resistors from "./components/Login/Resistors";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Single from './pages/Dashboard/pages/single/Single.jsx';
import New from './pages/Dashboard/pages/new/New.jsx';
import { RoomInputs, productInputs, userInputs } from './pages/Dashboard/formSource.js';
import './index.css';
import { AuthContext } from "./Context/AuthContext.jsx";
import { useContext } from "react";
import { PrivateAdmin } from "./components/Pvt/PrivteAdmin.js";
import Product from "./pages/Dashboard/pages/Product/Product.jsx";
import Order from "./pages/Dashboard/pages/Order/Order.jsx";
import { BookingColumns, RoomColumns, hotelColumns, userColumns } from "./pages/Dashboard/datatablesource.js";
import Booking from "./pages/Dashboard/pages/Booking/Booking.jsx";
import HotelNew from "./pages/Dashboard/pages/new/HotelNew.jsx";
import RoomNew from "./pages/Dashboard/pages/new/RoomNew.jsx";
import Profiles from "./pages/Dashboard/pages/Profile/Profile.jsx"


function App() {
  const {user}= useContext(AuthContext)
  console.log(user)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resistor" element={<Resistors />} />
        <Route path="/dashboard" element={<PrivateAdmin><Dashboard></Dashboard></PrivateAdmin>}>
          <Route index element={<DashboardHome />} /> 
          <Route path="users" element={<DashboardList colums={userColumns} />} />
          <Route path="users/:userId" element={<Single />} />
          <Route path="users/new" element={<New inputs={userInputs} title="Add New User" />} />
          <Route path="hotel" element={<Product colums={hotelColumns} />} />
          <Route path="hotel/:productId" element={<Single />} />
          <Route path="hotel/new" element={<HotelNew inputs={productInputs} title="Add new Hotel" />} />
          <Route path="room" element={<Order colums={RoomColumns} />} />
          <Route path="room/new" element={<RoomNew inputs={RoomInputs} title="Add New Room" />} />
          <Route path="Booking" element={<Booking colums={BookingColumns}></Booking>} />
          <Route path="profile" element={<Profiles></Profiles>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
