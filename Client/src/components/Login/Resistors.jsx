import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from 'axios';


const Registers = () => {
    // const [Credentails, setCredentails] = useState({
    //     userEmail: undefined,
    //     password: undefined
    // })
    // const {  dispatch, error } = useContext(AuthContext)
    // const handlechange = (e) => {
    //     setCredentails((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    // }
    const hanldeSubmit = async (e) => {

        e.preventDefault()

        const Name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log({ userName: Name, userEmail: email, password: password })
        // dispatch({ type: "AUTH_STAER" })
        try {
            const res = await axios.post('http://localhost:5000/api/auth/resistor', { userName: Name, userEmail: email, password: password })
            const user = res?.data
            console.log(user)
            // dispatch({ type: "AUTH_SUCCESS", payload: user })
        } catch (err) {
            // dispatch({ type: "AUTH_Fail", payload: err.message })
            console.log(err)

        }
    }
    return (
        <div>
            <form onSubmit={hanldeSubmit}>
                <input type="text" placeholder="Your Name" name="name" id="name" />
                <input type="email" placeholder="Your Email" name="email" id="email" />
                <input type="password" placeholder="Your password" name="password " id="password" />
                <button>submit</button>
            </form>
        </div>
    );
};

export default Registers;