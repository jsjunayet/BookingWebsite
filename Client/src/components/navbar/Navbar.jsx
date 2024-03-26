import "./navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "white", textDecoration: 'none' }}><span className="logo">Booking</span></Link>
        <div className="navItems">
          <Link to="/resistor"><button className="navButton">Register</button></Link>
          <Link to="/login"><button className="navButton">Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar