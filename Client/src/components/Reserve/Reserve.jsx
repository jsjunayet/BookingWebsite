import { IoMdCloseCircle } from "react-icons/io";
import useFetch from "../../Hook/useFetch";
import axios, { all } from 'axios';
import { useContext, useState } from "react";
import { SearchContext } from "../../Context/SearchContext";
import Loading from "../Loading/Loading";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { ThemContext } from "../../Context/ThemContext";
import { MdMeetingRoom } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Context/AuthContext";

const Reserve = ({ isopen, hoteId, time, price, img, City, RoomName, title }) => {
    const { Dark } = useContext(ThemContext)
    const [selected, setSelected] = useState([]);
    const { data, loading, error, refetch } = useFetch(`https://bookingwebsite-2.onrender.com/api/hotel/room/${hoteId}`);
    const { dates } = useContext(SearchContext);
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)




    const handleChange = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelected(checked ? [...selected, value] : selected.filter((item) => item !== value));
    };

    const getDateInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const dates = [];
        const date = new Date(start);
        while (date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }
        return dates;
    };
    const allDates = getDateInRange(dates[0]?.startDate, dates[0]?.endDate);
    const isAvailable = (roomNumber) => {
        const isFound = roomNumber?.unavailableDates.some((date) =>
            allDates.includes(new Date(date).getTime())
        );
        return !isFound;
    };
    const handleClick = async () => {
        const selectedRoomNumbers = selected.map(roomId => {
            const room = data.find(room => room.roomNumbers.some(roomNumber => roomNumber._id === roomId));
            const selectedRoomNumber = room.roomNumbers.find(roomNumber => roomNumber._id === roomId);
            return selectedRoomNumber.number;
        });
        const BookingData = { Duration: time, selectedRoomNumbers: selectedRoomNumbers, price: price, img: img, City: City, email: user?.userEmail, RoomName: RoomName, Roomtitle: title, endDate: new Date(dates[0]?.endDate), startDate: new Date(dates[0]?.startDate) }
        console.log(BookingData)

        try {
            await Promise.all(
                selected.map((roomId) => {
                    const res = axios.put(`https://bookingwebsite-2.onrender.com/api/room/avaiable/${roomId}`, {
                        dates: allDates,
                    });
                    return res.data;
                })
            );
            isopen(false);
            Swal.fire({
                title: 'Succefull Booking',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'OK'
            })
            const res = await axios.post("https://bookingwebsite-2.onrender.com/api/Booking", BookingData)
            navigate("/profile")

        } catch (err) { console.log(err) }
    };

    return (
        <div className={`p-6 rounded-lg shadow-lg ${Dark === "light" ? "bg-base-100" : "bg-[#060417] "}`}>
            {loading ? (
                <Loading></Loading>
            ) : (
                <div>
                    <button onClick={() => isopen(false)} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none">
                        <IoMdCloseCircle className="w-6 h-6 text-white" />
                    </button>
                    {
                        data.length == "0" ? <div className=" min-h-[100vh-200px] flex flex-col justify-center items-center">
                            <MdMeetingRoom className={` text-8xl ${Dark === "light" ? "text-[#060417]" : " text-white"}`} />
                            <p className={`text-xl font-semibold ${Dark === "light" ? "text-[#060417]" : " text-white"}`}>"Please check another Room, as there are no rooms available here."</p>
                        </div> : <div className="gap-4 grid md:grid-cols-2 grid-cols-1">
                            {data.map((room) => (
                                <div key={room?._id} className="border-b pb-4">
                                    <h2 className="text-xl font-semibold">{room?.title}</h2>
                                    <p className="text-gray-600">{room?.desc}</p>
                                    <p className="text-gray-600">Max People: {room?.maxPeople}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {room?.roomNumbers.map((roomNumber) => (
                                            <div key={roomNumber?._id} className="flex items-center">
                                                <label className="mr-2">{roomNumber?.number}</label>
                                                <input
                                                    type="checkbox"
                                                    disabled={!isAvailable(roomNumber)}
                                                    value={roomNumber?._id}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={handleClick} className="mt-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none">
                                        Reserve
                                    </button>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            )}
        </div>

    );
};

export default Reserve;
