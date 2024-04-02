import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { FaEdit } from "react-icons/fa";
import Navbar from '../components/navbar/Navbar';


const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="">
            <div className="min-h-screen">
                <div className=" w-full h-full">
                    <h1 className="text-center font-bold text-xl text-black pt-8">
                        Welcome to the {user?.isAdmin} Profile
                    </h1>
                    <div className="flex gap-5 items-center card-body ">

                        {user && (
                            <h1 className="text-5xl text-white font-semibold">
                                {user?.userName}
                            </h1>
                        )}
                        <hr />
                        <div className="">
                            <div className="grid lg:grid-cols-2 gap-10">
                                <div>
                                    <h2 className="text-xl font-bold">Full Name</h2>
                                    {user && <p className="">{user?.userName}</p>}
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Email</h2>

                                    {user && <p className="  font-semibold">{user?.userEmail}</p>}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box bg-slate-500 ">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>
                        <h3 className="font-bold text-lg text-center">
                            Update your profile
                        </h3>
                        <form action="">
                            <div className="form-control">
                                <label className="label">
                                    <span className=" dark:text-white">Change Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Change Name"
                                    className="input input-bordered text-white"
                                    required
                                    name="name"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className=" dark:text-white">Change Date of birth</span>
                                </label>
                                <input
                                    type="date"
                                    placeholder="Photo"
                                    className="input input-bordered text-white"
                                    required
                                    name="date"
                                />
                            </div>
                            <br />
                            <button className="btn bg-primary-content w-full">Update</button>
                        </form>
                    </div>
                </dialog>
            </>
        </div>
    );
};

export default Profile;