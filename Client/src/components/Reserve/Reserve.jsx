import { IoMdCloseCircle } from "react-icons/io";
import useFetch from "../../Hook/useFetch";
import axios from 'axios';
import { useContext, useState } from "react";
import { SearchContext } from "../../Context/SearchContext";
const Reserve = ({ isopen, hoteId }) => {
    const [seleted, Setseleted] = useState([])
    const { data, loading, error, refetch } = useFetch(`http://localhost:5000/api/hotel/room/${hoteId}`)
    const { dates } = useContext(SearchContext)
    const handleChange = (e) => {
        const checked = e.target.checked
        const value = e.target.value
        Setseleted(checked ? [...seleted, value] : seleted.filter((item) => item !== value))

    }
    console.log(dates)
    const getDateInRange = (startDate, endDate) => {
        const start = new Date(startDate)
        const end = new Date(endDate)
        const date = new Date(start.getTime())
        const dates = [];
        while (date <= end) {
            dates.push(new Date(date).getTime())
            date.setDate(date.getDate() + 1)

        }
        return dates
    }
    const alldates = getDateInRange(dates[0]?.startDate, dates[0]?.endDate)
    const isAvilable = (roomnumber) => {
        const isFound = roomnumber?.unavailableDates?.some(date =>
            alldates.includes(new Date(date).getTime()))
        return !isFound;
    }
    const handleClick = async () => {
        try {
            await Promise.all(seleted.map(roomId => {
                const res = axios.put(`http://localhost:5000/api/room/avaiable/${roomId}`, { dates: alldates })
                return res.data
            }))
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            {
                loading ? <p>Please Wait</p> : <>
                    <button onClick={() => isopen(false)}><IoMdCloseCircle /></button>
                    <div>
                        {
                            data.map((room) => (
                                <div>
                                    <p>{room?.title}</p>
                                    <p>{room?.desc}</p>
                                    <p>{room?.maxPeople}</p>

                                    <div>
                                        {
                                            room?.roomNumbers.map((roomNumber) => (
                                                <div>
                                                    <label>{roomNumber?.number}</label>
                                                    <input type="checkbox" disabled={!isAvilable(roomNumber)} value={roomNumber._id} onChange={handleChange} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <button onClick={handleClick}>Reserved</button>
                                </div>
                            ))
                        }
                    </div>
                </>
            }
            <div>

            </div>
        </div>
    );
};

export default Reserve;