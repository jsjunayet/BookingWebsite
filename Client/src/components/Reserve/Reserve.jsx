import { IoMdCloseCircle } from "react-icons/io";
import useFetch from "../../Hook/useFetch";
import axios, { all } from 'axios';
import { useContext, useState } from "react";
import { SearchContext } from "../../Context/SearchContext";
import Loading from "../Loading/Loading";

const Reserve = ({ isopen, hoteId }) => {
    const [selected, setSelected] = useState([]);
    const { data, loading, error, refetch } = useFetch(`http://localhost:5000/api/hotel/room/${hoteId}`);
    const { dates } = useContext(SearchContext);

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
            dates.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return dates;
    };

    const isAvailable = (roomNumber) => {
        const allDates = getDateInRange(dates[0]?.startDate, dates[0]?.endDate);
        const unavailableDates = roomNumber?.unavailableDates || []; // Ensure it's an array or default to an empty array
        const isFound = Array.isArray(unavailableDates) && unavailableDates.some(date =>
            allDates.some(dateInRange => dateInRange.getTime() === new Date(date).getTime())
        );
        return !isFound;
    };


    const handleClick = async () => {
        try {
            const allDates = getDateInRange(dates[0]?.startDate, dates[0]?.endDate);
            console.log(allDates)
            await Promise.all(selected.map((roomId) => {
                const res = axios.put(`http://localhost:5000/api/room/avaiable/${roomId}`, { dates: allDates })
                return res.data
            }))

        } catch (err) {
            console.error(err);
            // Optionally, you can handle errors here
        }
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            {loading ? (
                <Loading></Loading>
            ) : (
                <div>
                    <button onClick={() => isopen(false)} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none">
                        <IoMdCloseCircle className="w-6 h-6 text-black" />
                    </button>
                    <div className="space-y-4 gap-4 grid md:grid-cols-2 grid-cols-2">
                        {data.map((room) => (
                            <div key={room._id} className="border-b pb-4">
                                <h2 className="text-xl font-semibold">{room?.title}</h2>
                                <p className="text-gray-600">{room?.desc}</p>
                                <p className="text-gray-600">Max People: {room?.maxPeople}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {room?.roomNumbers.map((roomNumber) => (
                                        <div key={roomNumber._id} className="flex items-center">
                                            <label className="mr-2">{roomNumber?.number}</label>
                                            <input
                                                type="checkbox"
                                                disabled={!isAvailable(roomNumber)}
                                                value={roomNumber._id}
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
                </div>
            )}
        </div>

    );
};

export default Reserve;
