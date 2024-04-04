import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import axios from "axios"
import useFetch from '../Hook/useFetch';
import Loading from '../components/Loading/Loading';
import img from "../assest/images.jpeg"
import img1 from "../assest/images.png"
import Swal from 'sweetalert2';
import { ThemContext } from '../Context/ThemContext';
const Profile = () => {
    const { user } = useContext(AuthContext)
    const { data, loading, error, refetch } = useFetch(`http://localhost:5000/api/Booking/${user.userEmail}`)
    console.log(data)

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
    const { Dark } = useContext(ThemContext)

    return (
        <div>
            <div className="h-64 relative">
                <img src={img} alt="Cover Photo" className="w-full h-full object-cover" />
                <div className="flex items-center justify-center -mt-16">
                    <div className="bg-white p-2 rounded-full">
                        <img src={img1} alt="Avatar" className="w-32 h-32 rounded-full object-cover" />
                    </div>
                </div>
                <div className="text-center mt-2">
                    <h1 className="text-2xl font-semibold">{user.userName}</h1>
                </div>
            </div>


            {
                loading ? <Loading></Loading> :
                    <div className=' my-40'>

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