import { faL } from "@fortawesome/free-solid-svg-icons";
import { createContext, useEffect, useReducer } from "react"
import { json } from "react-router-dom";

const Initail = {
    user: JSON.parse(localStorage.getItem("USER")) || null,
    loading:false,
    error:null,
}

export const AuthContext = createContext(Initail)
const AuthReducer = (state, action) => {
    switch (action.type) {
        case "AUTH_STAER":
            return {
                user:null,
                loading:true,
                error:null
            }
        case "AUTH_SUCCESS":
            return {
                user:action.payload,
                loading:false,
                error:null
            }
        case "AUTH_Fail":
            return {
                user:null,
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}
export const AuthControlProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, Initail)
    console.log(state)
    useEffect(() => {
        localStorage.setItem("USER", JSON.stringify(state.user))
    }, [state])
    return (
        <AuthContext.Provider
            value={{
                user: state?.user,
                loading: state?.loading,
                error: state?.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}