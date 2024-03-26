import { IoMdCloseCircle } from "react-icons/io";
import useFetch from "../../Hook/useFetch";
import { useState } from "react";
const Reserve = ({ isopen, hoteId }) => {
    const [seleted, Setseleted] = useState([])
    const { data, loading, error, refetch } = useFetch(`http://localhost:5000/api/hotel/room/${hoteId}`)
    const handleChange = (e) => {
        const checked = e.target.checked
        const value = e.target.value
        Setseleted(checked ? [...seleted, value] : seleted.filter((item) => item !== value))

    }
    console.log(seleted)
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
                                                    <input type="checkbox" value={roomNumber._id} onChange={handleChange} />
                                                </div>
                                            ))
                                        }
                                    </div>
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