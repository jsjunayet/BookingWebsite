import { useState, useEffect, useContext } from "react";
import { IoIosHome } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { MdOutlineContactPhone } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { AuthContext } from "../../Context/AuthContext";
import NavLink from "./NavLink";
import { MdOutlineLightMode } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { ThemContext } from "../../Context/ThemContext";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const { user, dispatch, loading, error } = useContext(AuthContext)
  const { Dark, setDark } = useContext(ThemContext)
  const handleChange = () => {
    setDark((prev) => prev === "light" ? "dark" : "light")
  }
  console.log(Dark)
  const location = useLocation()

  const handleout = () => {
    localStorage.removeItem("USER")
    dispatch({ type: "LOGOUT" })
  }
  const Links = [
    {
      id: 1,
      path: "/",
      title: "Home",
      icon: <IoIosHome />,
    }
  ];

  const [open, setOpen] = useState(false);
  const controls = useAnimation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      const threshold = 78;

      if (isScrollingDown && currentScrollPos > threshold) {
        controls.start({ opacity: 0, y: -50 });
        setIsScrolled(true);
      } else {
        controls.start({ opacity: 1, y: 0 });
        setIsScrolled(currentScrollPos > threshold);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, controls]);

  const closeMenu = () => setOpen(false);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full  ${Dark === "light" ? "" : "bg-gray-900"} z-50  ${isScrolled ? 'bg-[#060417]' : ' bg-transparent'}`}
      animate={controls}
      initial={{ opacity: 1, y: 0 }}
    >
      <div className=" max-w-5xl mx-auto font-poppin  py-[5px] flex flex-col md:flex-row justify-between items-center">
        <motion.div
          className="flex items-center  justify-between"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <h1 className={`text-2xl cursor-pointer font-bold ${isScrolled ? 'text-white ' : ' text-[#3182CE]'}`}>ONLINE_<span className="text-[#febb02]">BOOKING</span></h1>
          </Link>

          <div className="block ml-20 md:hidden">
            {
              Dark === "light" ? <MdOutlineLightMode onClick={handleChange} className={`text-2xl cursor-pointer ${isScrolled ? 'text-white' : ' text-black'}`} /> :
                <MdOutlineDarkMode onClick={handleChange} className={`text-2xl ${Dark === "light" ? "" : "text-white"} cursor-pointer ${isScrolled ? 'text-white' : ' text-black'}`} />
            }
          </div>
          <div className="md:hidden ml-2">
            <motion.div
              onClick={() => setOpen(!open)}
              className="text-3xl cursor-pointer transition-transform duration-300 transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {open ? (
                <FiX onClick={closeMenu} className={`text-2xl ${Dark === "light" ? "text-black" : "text-white"}  ${isScrolled ? 'text-white' : ' text-black'}`} />
              ) : (
                <FiMenu className={`text-2xl ${Dark === "light" ? "text-black" : "text-white"} ${isScrolled ? 'text-white' : ' text-black'}`} />
              )}
            </motion.div>
          </div>


        </motion.div>

        <ul
          className={`md:flex md:items-center md:space-x-6 md:pb-0 pb-3 ${open ? "block" : "hidden md:block"
            }`}
        >
          {
            isScrolled ? <div className="md:flex justify-center items-center gap-6">
              {Links.map((link) => (
                <motion.li
                  key={link.name}
                  className="md:my-0 my-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <NavLink src={link.path} icon={link.icon} title={link.title} />
                </motion.li>
              ))}
            </div> : ""
          }
          {/* {user?.isAdmin && <Link to='/dashboard'>
            <div className={`flex items-center text-white hover:text-gray-300 transition duration-300 relative relative-group`}>
              <span className="mr-1"><MdDashboard /></span>
              Dashboard
              {location.pathname === "/dashboard" && (
                <>
                  <motion.div
                    className="absolute font-poppin bottom-0  left-0 w-full h-[2px] bg-gradient-to-r from-[#3182CE] via-[#93C5FD] to-[#3182CE] -mb-1"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9 }}
                  />
                </>
              )}
            </div>
          </Link>} */}
          {user && <Link to='/profile'>
            <div className={`flex items-center ${Dark == "light" ? "text-black" : "text-white"} hover:text-gray-300 transition duration-300 ${isScrolled ? "text-white" : "text-black"} relative relative-group`}>
              <span className="mr-1"><ImProfile /></span>
              Profile
              {location.pathname === "/profile" && (
                <>
                  <motion.div
                    className="absolute font-poppin bottom-0  left-0 w-full h-[2px] bg-gradient-to-r from-[#3182CE] via-[#93C5FD] to-[#3182CE] -mb-1"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9 }}
                  />
                </>
              )}
            </div>
          </Link>}
          <div className=" md:block hidden">
            {
              Dark === "light" ? <MdOutlineLightMode onClick={handleChange} className={`text-2xl cursor-pointer ${isScrolled ? 'text-white' : ' text-black'}`} /> :
                <MdOutlineDarkMode onClick={handleChange} className={`text-2xl ${Dark === "light" ? "" : "text-white"} cursor-pointer ${isScrolled ? 'text-white' : ' text-black'}`} />
            }
          </div>
          {
            user ? <Link onClick={handleout}><button className="rounded-lg bg-[#005C99] mt-2 md:mt-0
             text-white font-semibold px-4 py-1">LogOut</button></Link>
              : <Link to="/login"><button className="rounded-lg mt-2 md:mt-0 bg-[#005C99] text-white font-semibold px-4 py-1">Login</button></Link>
          }
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;