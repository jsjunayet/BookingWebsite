import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";


const Login = () => {
    const { Credentails, setCredentails } = useState({
        userEmail: undefined,
        password: undefined
    })
    const { user, dispatch, error } = useContext(AuthContext)
    const handlechange = (e) => {
        setCredentails((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }
    console.log(Credentails)
    const hanldeSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "AUTH_STAER" })
        try {
            const res = await fetch("http://localhost:5000/api/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" // Specify content type as JSON
                },
                body: JSON.stringify(Credentails)
            });
            const user = await res.json()
            dispatch({ type: "AUTH_SUCCESS", payload: user })
        } catch (err) {
            dispatch({ type: "AUTH_Fail", payload: err.message })

        }
    }
    console.log(user)
    return (
        <div>
            <input type="email" placeholder="Your Email" onChange={handlechange} id="userEmail" />
            <input type="password" placeholder="Your password" onChange={handlechange} id="password" />
            <input onClick={hanldeSubmit} type="button" value="Submit" />
            {
                error && <p>{error.message}</p>
            }
        </div>
    );
};

export default Login;