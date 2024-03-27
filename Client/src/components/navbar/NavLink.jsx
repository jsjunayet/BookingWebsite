import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";


const NavLink = ({ src, icon, title }) => {
    const location = useLocation();
    return (
        <Link to={src}>
            <div className={`flex font-poppin items-center text-white hover:text-gray-300 transition duration-300 relative relative-group`}>
                <span className="mr-1">{icon}</span>
                {title}
                {location.pathname === src && (
                    <>
                        <motion.div
                            className="absolute bottom-0  left-0 w-full h-[2px] bg-gradient-to-r from-[#3182CE] via-[#93C5FD] to-[#3182CE] -mb-1"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.9 }}
                        />
                    </>
                )}
            </div>
        </Link>
    );
};

export default NavLink;