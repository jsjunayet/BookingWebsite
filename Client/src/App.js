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
import { productInputs, userInputs } from './pages/Dashboard/formSource.js';
import './index.css';
import { AuthContext } from "./Context/AuthContext.jsx";
import { useContext } from "react";
import { PrivateAdmin } from "./components/Pvt/PrivteAdmin.js";

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
          <Route path="users" element={<DashboardList />} />
          <Route path="users/:userId" element={<Single />} />
          <Route path="users/new" element={<New inputs={userInputs} title="Add New User" />} />
          <Route path="products" element={<List />} />
          <Route path="products/:productId" element={<Single />} />
          <Route path="products/new" element={<New inputs={productInputs} title="Add New Product" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
