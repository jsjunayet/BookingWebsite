import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export const PrivateAdmin = ({ children }) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!user || !user.isAdmin) {
            navigate("/login");
        }
    }, [user, navigate]);

    if (user && user.isAdmin) {
        return children;
    }

    return null; 
};
