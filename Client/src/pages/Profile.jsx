import React, { useContext, useState } from 'react';
import { MdFreeCancellation } from "react-icons/md";

import { AuthContext } from '../Context/AuthContext';
import axios from "axios"
import useFetch from '../Hook/useFetch';
import Loading from '../components/Loading/Loading';
import img from "../assest/1708456843799.jpeg"
import img1 from "../assest/images.jpeg"
import Swal from 'sweetalert2';
import { ThemContext } from '../Context/ThemContext';
import { MdAddHomeWork } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdEditSquare } from "react-icons/md";
import { imgbbupload } from '../components/Imagbb/ImageUpload';
import { DataGrid } from '@mui/x-data-grid';
import Navbar from '../components/navbar/Navbar';

const Profile = () => {
    const { user: users, dispatch } = useContext(AuthContext)
    const { data, loading, error, refetch } = useFetch(`http://localhost:5000/api/Booking/${users.userEmail}`)
    const total = data.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue.price),0);
    const columns = [
        { field: 'number', headerName: 'Number', width: 120, padding: 5 },
        { field: 'roomName', headerName: 'RoomName', width: 150 },
        { field: 'location', headerName: 'Location', width: 150 },
        { field: 'startTime', headerName: 'StartTime', width: 150 },
        { field: 'endTime', headerName: 'EndTime', width: 150 },
        { field: 'duration', headerName: 'Duration', width: 150 },
        { field: 'price', headerName: 'Price', width: 150 },
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
            <Navbar />
            <div>
    <div className='flex justify-center  items-center pt-20'>
     
      <div className='bg-white shadow-lg rounded-2xl w-[75%]'>
        <img
          alt='profile'
          src='https://wallpapercave.com/wp/wp10784415.jpg'
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={users?.ProfilePik}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 px-4 text-xs text-white bg-pink-500 rounded-full'>
            {users.isAdmin?"ADMIN":"USER"}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            User Id: {users?._id}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                  {users?.userName}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>{users.userEmail}</span>
              </p>
              <div>
              <p className='flex gap-1'>
                Total Order : 
                <span className='font-bold text-black '>{data.length}</span>
              </p>
              <p className='flex gap-1'>
                Total Buy : 
                <span className='font-bold text-black '>{total}</span>
              </p>
              </div>
             

              <div>
                <button className='bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                  Update Profile
                </button>
                <button className='bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
               
            </div>

         <div>
         {
                loading ? <Loading /> :
                    <div className={`mx-2 md:mx-0 ${Dark == "light" ? "" : " bg-[#060417] text-gray-300"}`}>
                        <div className=' mt-10  max-w-5xl mx-auto z-10'>
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
        </div>
    );
};

export default Profile;
