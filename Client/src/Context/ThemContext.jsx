import { createContext, useEffect, useState } from "react";

export const ThemContext = createContext(null)
const ThemProvider = ({ children }) => {
    const [Dark, setDark] = useState(localStorage.getItem("Dark") || "light");

    useEffect(() => {
        localStorage.setItem("Dark", Dark);
    }, [Dark]);
    return (
        <ThemContext.Provider value={{ Dark, setDark }}>
            {children}
        </ThemContext.Provider>
    )
}
export default ThemProvider