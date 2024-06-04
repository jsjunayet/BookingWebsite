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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resistor" element={<Resistors />} />
        <Route path="/dashboard" element={<Dashboard />}>
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
