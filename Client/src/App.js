import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List.jsx";
import Login from "./components/Login/Login";
import Resistors from "./components/Login/Resistors";
import "./index.css"
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/resistor" element={<Resistors></Resistors>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
