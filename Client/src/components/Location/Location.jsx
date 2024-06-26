import React, { useContext } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaInfoCircle, FaUserCog } from 'react-icons/fa';
import { ThemContext } from '../../Context/ThemContext';

const Location = () => {
    const { Dark } = useContext(ThemContext)
    return (
        <div className='max-w-5xl mx-auto '>
            <h1 className={`mb-6 text-xl text-center font-semibold ${Dark === "light" ? "text-gray-700" : "text-gray-200"}`}>Our Main Branch Location</h1>
            <div className='  md:flex md:flex-row flex flex-col gap-y-5 md:gap-y-0 gap-5'>

                <div className='bg-base-100 mx-2 lg:p-8 lg:pb-10 border- border-t-8  shadow-md bg-base-100 border-blue-700 md:mx-0   p-4  rounded-lg'>
                    <div className='md:mt-10 mt-5'>
                        <div className="flex items-center   mb-4">
                            <FaMapMarkerAlt className="mr-2 text-gray-700" />
                            <p className={`text-sm font-semibold ${Dark === "light" ? "text-gray-700" : "text-gray-500"}`}>Location:</p>
                            <p className={`ml-2 ${Dark === "light" ? "text-gray-700" : "text-gray-500"}`}>Shikarpur, Brahmanbaria, Bangladesh</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaEnvelope className="mr-2 text-gray-700" />
                            <p className={`text-sm font-semibold ${Dark === "light" ? "text-gray-700" : "text-gray-500"}`}>Email:</p>
                            <p className={`ml-2 ${Dark === "light" ? "text-gray-700" : "text-gray-500"}`}>info@online_booking.com</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaPhone className="mr-2 text-gray-700" />
                            <p className={`text-sm font-semibold ${Dark === "light" ? "text-gray-700" : "text-gray-500"}`}>Call:</p>
                            <p className={`ml-2 ${Dark === "light" ? "text-gray-700" : "text-gray-500"}`}>+1234567890</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaUserCog className="mr-2 text-gray-700" />
                        <p className={`text-sm font-semibold ${Dark === "light" ? "text-gray-700" : "text-gray-500"}`}>Website Type:</p>
                        <p className={`ml-2 ${Dark === "light" ? "text-gray-700" : "text-gray-500"}`}>Hotel Booking Website</p>
                    </div>
                </div>
                <div className="flex-1 bg-base-100 md:mx-0 mx-2 border-t-8 border-blue-700 shadow-lg px-4 pt-1 rounded-lg h-[300px]">
                    <div className="relative" style={{ paddingTop: '75%' }}>
                        <iframe
                            className="absolute inset-0 w-full h-[284px] rounded"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Shikarpur,kasba,%20brahmanbaria,%20bangladesh+(Workhub)&amp;t=&amp;z=8&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        >
                            <a href="https://www.gps.ie/" className="absolute bottom-0 right-0 m-4 text-sm text-blue-500">View Larger Map</a>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;