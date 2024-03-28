import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { RiLockPasswordLine, RiUserLine } from 'react-icons/ri';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { Link } from "react-router-dom";


const Login = () => {
    // const [Credentails, setCredentails] = useState({
    //     userEmail: undefined,
    //     password: undefined
    // })
    const { user, dispatch, error, loading } = useContext(AuthContext)
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false);
    // const handlechange = (e) => {
    //     setCredentails((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    // }
    const handleLogin = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
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
        <div className=" flex items-center px-3 justify-center min-h-screen text-gray-800">
            <div className="w-full lg:max-w-[520px] mx-auto lg:p-6">
                <div className="flex dark:text-white flex-col justify-center items-center">
                    <div className=" mt-2 mb-7 text-center">
                        <h1 className="mb-2 text-gray-800 text-3xl font-bold">
                            Log in to your account
                        </h1>
                        <h4 className="text-base">
                            <span className="opacity-75">Or</span>{" "}
                            <Link to="/resistor"> <span className="text-blue-500">create a free account</span></Link>
                        </h4>
                    </div>
                </div>
                <div className="lg:p-8 lg:pb-10 border- border-t-4 rounded-xl shadow-md bg-gray-800 border-blue-700">
                    <form onSubmit={handleLogin} className="space-y-3">
                        <div className="relative">
                            <RiUserLine className="absolute top-2 left-3 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="userEmail"
                                className="w-full py-1 px-2 rounded bg-gray-300 border-none focus:bg-gray-600 text-black pl-10"
                            />
                        </div>
                        <div className="relative">
                            <RiLockPasswordLine className="absolute top-2 left-3 text-gray-400" />
                            <input
                                type={showPass ? 'text' : 'password'}
                                placeholder="Password"
                                name="password"
                                id="password"
                                className="w-full py-1 px-2 rounded bg-gray-300 border-none focus:bg-gray-600 text-black pl-10"
                            />
                            <div className="absolute -mt-[35px] cursor-pointer right-0 flex items-center pr-3">
                                <p
                                    onClick={() => setShowPass(!showPass)}
                                    className="p-2 focus:outline-none"
                                >
                                    {showPass ? (
                                        <HiEye className="h-5 w-5 text-black dark:text-white" />
                                    ) : (
                                        <HiEyeOff className="h-5 w-5 text-black dark:text-white" />
                                    )}
                                </p>
                            </div>
                        </div>
                        <button disabled={loading} className="mx-auto bg-gray-300 text-xl font-semibold text-black py-1 px-3 rounded-sm hover:bg-gray-500">{loading ? "Login...." : "Login"}</button>
                    </form>
                    {
                        error && <p className=" text-red-600 mt-2">{error}</p>
                    }
                    <div className="flex justify-between mt-2 text-white">
                        <p>Please Create account</p>
                        <Link to="/resistor">SignUp</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;