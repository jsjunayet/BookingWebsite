import { IoMdCloseCircle } from "react-icons/io";
import useFetch from "../../Hook/useFetch";
import axios, { all } from 'axios';
import { useContext, useState } from "react";
import { SearchContext } from "../../Context/SearchContext";

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
        <div>
            {loading ? <p>Please Wait</p> : (
                <>
                    <button onClick={() => isopen(false)}><IoMdCloseCircle /></button>
                    <div>
                        {data.map((room) => (
                            <div key={room._id}>
                                <p>{room?.title}</p>
                                <p>{room?.desc}</p>
                                <p>{room?.maxPeople}</p>
                                <div>
                                    {room?.roomNumbers.map((roomNumber) => (
                                        <div key={roomNumber._id}>
                                            <label>{roomNumber?.number}</label>
                                            <input type="checkbox" disabled={!isAvailable(roomNumber)} value={roomNumber._id} onChange={handleChange} />
                                        </div>
                                    ))}
                                </div>
                                <button onClick={handleClick}>Reserved</button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Reserve;
