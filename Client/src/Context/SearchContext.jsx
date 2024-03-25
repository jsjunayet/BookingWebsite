import { createContext, useEffect, useReducer } from "react"
import { json } from "react-router-dom";

const Initail = {
    city: undefined,
    dates: [],
    options: {
        adult: undefined,
        children: undefined,
        room: undefined,
    }
}
const StoreState = JSON.parse(localStorage.getItem("SearchItem"))
const InitailState = StoreState || Initail
export const SearchContext = createContext(Initail)
const SearchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return Initail
        default:
            return state
    }
}
export const SearchControlProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, InitailState)
    console.log(state)
    useEffect(() => {
        localStorage.setItem("SearchItem", JSON.stringify(state))
    }, [state])
    return (
        <SearchContext.Provider
            value={{
                city: state?.destination,
                dates: state?.dates,
                options: state?.options,
                dispatch
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}