import { createContext, useState } from "react";

export const ThemContext = createContext(null)
const ThemProvider = ({ children }) => {
    const [Dark, setDark] = useState("light")
    return (
        <ThemContext.Provider value={{ Dark, setDark }}>
            {children}
        </ThemContext.Provider>
    )
}
export default ThemProvider