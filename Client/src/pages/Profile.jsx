import React, { useContext, useState } from 'react';
import { MdFreeCancellation } from "react-icons/md";

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
import { DataGrid } from '@mui/x-data-grid';

const Profile = () => {
    const { user: users, dispatch } = useContext(AuthContext)
    const { data, loading, error, refetch } = useFetch(`https://bookingwebsite-2.onrender.com/api/Booking/${users.userEmail}`)

    const columns = [
        { field: 'number', headerName: 'Number', width: 100, padding: 5 },
        { field: 'roomImage', headerName: 'RoomImage', width: 150 },
        { field: 'roomName', headerName: 'RoomName', width: 150 },
        { field: 'location', headerName: 'Location', width: 130 },
        { field: 'startTime', headerName: 'StartTime', width: 130 },
        { field: 'endTime', headerName: 'EndTime', width: 120 },
        { field: 'duration', headerName: 'Duration', width: 120 },
        { field: 'price', headerName: 'Price', width: 120 },
        { field: 'roomNumber', headerName: 'RoomNumber', width: 150 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => (
                <MdFreeCancellation onClick={() => handleDelete(params.row._id, params.row.duration)} className=' text-white text-4xl mt-2 cursor-pointer bg-red-800 rounded-md p-[1px]' />
            )
        },
    ];

    const rows = data.map((item, index) => ({
        id: index + 1,
        number: index + 1,
        roomImage: <img src={item?.img} alt="room" className='rounded' />,
        roomName: item.RoomName,
        location: item.City,
        startTime: item.startDate.substring(0, 10),
        endTime: item.endDate.substring(0, 10),
        duration: item.Duration,
        price: item.price,
        roomNumber: item.selectedRoomNumbers.join(', '),
        action: 'Cancel',
        _id: item._id,
    }));

    const { Dark } = useContext(ThemContext)
    const [Load, setLoad] = useState(false)
    const [modal, setModal] = useState(false)

    const handleDelete = (id, duration) => {
        console.log(duration)
        if (duration <= 1) {
            return Swal.fire({
                title: "Please check your date",
                text: "You can cancel a booking before 1 day from the booking day",
                icon: "error"
            });
        } else {
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
                    axios.delete(`https://bookingwebsite-2.onrender.com/api/Booking/${id}`)
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
        const res = await axios.put(`https://bookingwebsite-2.onrender.com/api/user/${users?.userEmail}`, usersInformation)
        const user = res.data
        console.log("updateusers", user)
        if (user) {
            dispatch({ type: "AUTH_SUCCESS", payload: user })
            setModal(false)
            setLoad(false)
        }
    }
    console.log(users)

    const handleChange = () => {
        setModal(true)
    }

    return (
        <div className={`${Dark == "light" ? "" : " bg-[#060417] text-gray-300"} h-screen`}>
            <div className="h-64 relative">
                <img src="https://ibb.co/FVrMxPk" alt="CoverPhoto" className="w-full h-full object-cover" />
                {
                    modal &&
                    <div className="modal-box bg-slate-500 z-40 fixed top-0 right-0  w-full h-full flex justify-center items-center">
                        <div className="absolute top-2 right-2">
                            <button onClick={() => setModal(false)} className="btn btn-sm btn-circle btn-ghost">
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
                <div className="flex md:flex-row flex-col justify-center items-center md:justify-between -mt-16">
                    <Link to="/">
                        <div className='md:flex text-2xl md:block hidden md:ml-10 ml-1 mt-5 justify-center items-center'>
                            <MdAddHomeWork className='text-2xl ' /> |  Home
                        </div>
                    </Link>
                    <div>
                        <div className="bg-white p-2 rounded-full">
                            <img src={`${users.ProfilePik ? users?.ProfilePik : img1}`} alt="Avatar" className="w-32 h-32 rounded-full object-cover" />
                        </div>
                        <h1 className="text-2xl font-semibold mt-2">{users?.userName}</h1>

                    </div>

                    <div className='flex gap-2 md:mr-10 mr-2 mt-5 justify-center items-center text-2xl'>
                        <strong>Profile Edit</strong> <button className=' bg-green-700 py-1 px-2 rounded text-white'><MdEditSquare onClick={handleChange} /></button>
                    </div>
                </div>
                <div className={`text-center mt-2`}>
                </div>
            </div>

            {
                loading ? <Loading /> :
                    <div className='mx-2 md:mx-0'>
                        <div className='md:mt-40 mt-52  max-w-7xl mx-auto z-10'>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: { page: 0, pageSize: 5 },
                                        },
                                    }}
                                    pageSizeOptions={[5, 10, 20, 30, 40]}
                                    getRowClassName={(_, index) =>
                                        index % 4 === 0 ? 'bg-green-500' : 'bg-gray-300'
                                    }
                                />
                            </div>
                        </div>

                    </div>
            }
        </div>
    );
};

export default Profile;
