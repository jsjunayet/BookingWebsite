import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import axios from "axios"
import useFetch from '../Hook/useFetch';
import Loading from '../components/Loading/Loading';
import img from "../assest/images.jpeg"
import img1 from "../assest/images.png"
import Swal from 'sweetalert2';
import { ThemContext } from '../Context/ThemContext';
import { MdAddHomeWork } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdEditSquare } from "react-icons/md";
import { imgbbupload } from '../components/Imagbb/ImageUpload';


const Profile = () => {
    const { Dark } = useContext(ThemContext)
    const [Load, setLoad] = useState(false)
    const { user: users, dispatch } = useContext(AuthContext)
    const [modal, setmodal] = useState(false)
    console.log(users)
    const { data, loading, error, refetch } = useFetch(`http://localhost:5000/api/Booking/${users.userEmail}`)
    const HandleDelted = (id, before) => {
        const dateStr1 = new Date().toLocaleDateString()
        const dateStr2 = before
        const date1 = new Date(dateStr1)
        const date2 = new Date(dateStr2)
        const daydifferent = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24))
        console.log(daydifferent)
        if (daydifferent <= 1) {
            return Swal.fire({
                title: "Please check you date",
                text: "You can cancel a booking before 1 day from the booking day",
                icon: "error"
            });
        }
        else {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://localhost:5000/api/Booking/${id}`)
                        .then(res => {
                            refetch()
                        })
                }
            });
        }
    }
    const handleUpdate = async (e) => {
        setLoad(true)
        e.preventDefault()
        const userName = e.target.name.value
        const cover = e.target.img1.files[0]
        const profile = e.target.img2.files[0]
        const Cover = await imgbbupload(cover)
        console.log(cover, profile)
        const Profile = await imgbbupload(profile)
        const usersInformation = { userName: userName, CoverPik: Cover.data?.url_viewer, ProfilePik: Profile.data?.url_viewer }
        const res = await axios.put(`http://localhost:5000/api/user/${users?.userEmail}`, usersInformation)
        const user = res.data
        console.log("updateusers", user)
        if (user) {
            dispatch({ type: "AUTH_SUCCESS", payload: user })
            setmodal(false)
            setLoad(false)
        }
    }
    const handleChange = () => {
        setmodal(true)
    }
    console.log(data)
    return (
        <div className={`${Dark == "light" ? "" : " bg-[#060417] text-gray-300"} h-screen`}>
            <div className="h-64 relative">
                <img src={`${users.CoverPik ? users.CoverPik : img}`} alt="CoverPhoto" className="w-full h-full object-cover" />
                {
                    modal &&
                    <div className="modal-box bg-slate-500 fixed top-0 right-0  w-full h-full flex justify-center items-center">
                        <div className="absolute top-2 right-2">
                            <button onClick={() => setmodal(false)} className="btn btn-sm btn-circle btn-ghost">
                                ✕
                            </button>
                        </div>

                        <div className="w-96 bg-white p-4 rounded-lg">
                            <h3 className="font-bold text-lg text-center mb-4">
                                Update your profile
                            </h3>
                            <form onSubmit={handleUpdate}>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="dark:text-white">Change Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Change Name"
                                        className="input input-bordered text-white"
                                        required
                                        name="name"
                                    />
                                </div>

                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="dark:text-white">Change Cover photo</span>
                                    </label>
                                    <input type="file" name='img1' className="file-input file-input-bordered file-input-info w-full" />
                                </div>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="dark:text-white">Change Profile photo</span>
                                    </label>
                                    <input type="file" name='img2' className="file-input file-input-bordered file-input-info w-full" />
                                </div>
                                <br />
                                <button disabled={Load} className="btn bg-primary-content w-full">{Load ? "Update..." : "Update"}</button>
                            </form>
                        </div>
                    </div>
                }
                <div className="flex items-center justify-between -mt-16">
                    <Link to="/">
                        <div className='flex text-2xl md:ml-10 ml-1 mt-5 justify-center items-center'>
                            <MdAddHomeWork className='text-2xl ' /> |  Home
                        </div>
                    </Link>
                    <div className="bg-white p-2 rounded-full">
                        <img src={`${users.ProfilePik ? users.ProfilePik : img1}`} alt="Avatar" className="w-32 h-32 rounded-full object-cover" />
                    </div>

                    <div className='flex gap-2 md:mr-10 mr-2 mt-5 justify-center items-center text-2xl'>
                        <strong>Profile Edit</strong> <button className=' bg-green-700 py-1 px-2 rounded text-white'><MdEditSquare onClick={handleChange} /></button>
                    </div>
                </div>
                <div className={`text-center mt-2`}>
                    <h1 className="text-2xl font-semibold mr-16">{users?.userName}</h1>
                </div>
            </div>


            {
                loading ? <Loading></Loading> :
                    <div className=' mt-40'>

                        {
                            data.length > 0 && <div className="mt-5 mb-4">
                                {/* head */}
                                <div className="hidden lg:block">
                                    <dev className=" grid grid-cols-10 text-center text-indigo-200/100 font-semibold text-base  border-b-2 border-indigo-200/50 py-3">
                                        <p className="col-span-1">Number</p>
                                        <p className="col-span-1">RoomImage</p>
                                        <p className="col-span-1">RoomName</p>
                                        <p className="col-span-1">Location</p>
                                        <p className="col-span-1">StartTime</p>
                                        <p className="col-span-1">EndTime</p>
                                        <p className="col-span-1">Duration</p>
                                        <p className="col-span-1">Price</p>
                                        <p className="col-span-1">RoomNumber</p>
                                        <p className="col-span-1">Action</p>

                                    </dev>
                                </div>

                                <div className="">
                                    {data.map((item, index) => (
                                        <div
                                            key={item._id}
                                            className={`${index % 2 === 0
                                                ? "bg-gray-700 text-white"
                                                : "bg-gray-300 text-black"
                                                } text-center font-semibold border-b border-indigo-200/50 space-y-1 lg:grid grid-cols-10 py-3 justify-center items-center`}
                                        >
                                            <p className="col-span-1 font-semibold text-center">
                                                {index + 1}
                                            </p>
                                            <div className='col-span-1 w-16 h-10 mx-auto' >
                                                <img src={item.img} alt="room" className=' rounded' />
                                            </div>
                                            <div className="col-span-1">
                                                <p className="font-bold">{item.RoomName}</p>
                                            </div>

                                            <p className="col-span-1">{item.City}</p>
                                            <p className="col-span-1">{item.startDate.substring(0, 10)}</p>
                                            <p className="col-span-1">{item.endDate.substring(0, 10)}</p>
                                            <p className="col-span-1">{item.Duration}</p>
                                            <p className="col-span-1">{item.price}</p>
                                            <div className="col-span-1">
                                                {item.selectedRoomNumbers.join(', ')}
                                            </div>
                                            <div className="col-span-1 text-3xl cursor-pointer">
                                                <button onClick={() => HandleDelted(item._id, item.endDate)} className=' bg-red-600 text-white text-[15px] py-[2px] px-2 rounded-xl' >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
            }
            <div>

            </div>



        </div>
    );
};

export default Profile;