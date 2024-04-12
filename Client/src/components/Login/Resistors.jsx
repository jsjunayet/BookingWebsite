import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { RiLockPasswordLine, RiUserLine } from 'react-icons/ri';
import { ThemContext } from "../../Context/ThemContext";
const Registers = () => {
    const { Dark } = useContext(ThemContext)
    const { loading, error, dispatch } = useContext(AuthContext)
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false);
    const handleSingup = async (e) => {
        e.preventDefault()
        const Name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log({ userName: Name, userEmail: email, password: password })
        dispatch({ type: "AUTH_STAER" })
        try {
            const res = await axios.post('https://bookingwebsite-2.onrender.com/api/auth/resistor', { userName: Name, userEmail: email, password: password })
            const user = res?.data?.user
            console.log(user)
            navigate("/")
            dispatch({ type: "AUTH_SUCCESS", payload: user })
        } catch (err) {
            dispatch({ type: "AUTH_Fail", payload: err.message })
            console.log(err)

        }
    }
    return (
        <div className={`flex items-center px-3 justify-center min-h-screen text-gray-800 ${Dark === "light" ? "" : " bg-gray-900"}`}>
            <div className="w-full lg:max-w-[520px] mx-auto p-2 lg:p-6">
                <div className="flex dark:text-white flex-col justify-center items-center">
                    <div className=" mt-2 mb-7 text-center">
                        <h1 className={`mb-2  text-3xl font-bold ${Dark === "light" ? "text-[#060417]" : " text-gray-100"}`}>
                            Create a free account
                        </h1>
                        <h4 className="text-base">
                            <span className="">Or</span>{" "}
                            <Link to="/login"> <span className="text-blue-500">Already Account?</span></Link>
                        </h4>
                    </div>
                </div>
                <div className="lg:p-8 lg:pb-10 border- border-t-4 rounded-xl p-5 shadow-md bg-gray-800 border-blue-700">
                    <form onSubmit={handleSingup} className="space-y-3">
                        <div className="relative">
                            <RiUserLine className="absolute top-2 left-3 text-gray-400" />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="userName"
                                className="w-full py-1 px-2 rounded bg-gray-300 border-none focus:bg-gray-600 text-black pl-10"
                            />
                        </div>
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
                        <button disabled={loading} className="mx-auto bg-gray-300 text-xl font-semibold text-black py-1 px-3 rounded-sm hover:bg-gray-500">{loading ? "SignUp..." : "SignUp"}</button>
                    </form>
                    {
                        error && <p className=" text-red-600 mt-2">{error}</p>
                    }
                    <div className="flex justify-between mt-2 text-white">
                        <p>Already Account?</p>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registers;