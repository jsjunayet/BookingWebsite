import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Login = () => {
    // const [Credentails, setCredentails] = useState({
    //     userEmail: undefined,
    //     password: undefined
    // })
    const { user, dispatch, error } = useContext(AuthContext)
    const navigate = useNavigate()
    // const handlechange = (e) => {
    //     setCredentails((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    // }
    const hanldeSubmit = async (e) => {


        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        dispatch({ type: "AUTH_STAER" })
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { userEmail: email, password: password })
            const user = res?.data
            console.log(user)
            dispatch({ type: "AUTH_SUCCESS", payload: user })
            navigate("/")
        } catch (err) {
            dispatch({ type: "AUTH_Fail", payload: err.message })

        }
    }
    return (
        <div>
            <form onSubmit={hanldeSubmit}>
                <input type="email" placeholder="Your Email" name="userEmail" id="email" />
                <input type="password" placeholder="Your password" name="password " id="password" />
                <button>submit</button>
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default Login;