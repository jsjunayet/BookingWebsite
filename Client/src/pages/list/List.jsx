import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../Hook/useFetch";
import Loading from "../../components/Loading/Loading";
import { ThemContext } from "../../Context/ThemContext";
import { FaFilterCircleXmark } from "react-icons/fa6";

const List = () => {
  const location = useLocation();
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);

  const [options, setOptions] = useState(location.state.options);
  const { data, loading, error, refetch } = useFetch(`https://bookingwebsite-2.onrender.com/api/hotel?city=${destination || null}&min=${min || 0}&max=${max || 999}`)

  const handleClick = () => {
    refetch()
  }
  const { Dark } = useContext(ThemContext)
  return (
    <div className={` ${Dark === "light" ? "" : "bg-[#060417] text-white"} min-h-screen`}>
      <Navbar />
      <div className=" max-w-5xl mx-auto px-4 pt-20">
        <div className="md:flex gap-8 ">
          <div className="bg-[#005C99]   mb-5 md:mb-0  h-[520px]  md:w-[35%] w-full p-4 rounded">
            <h1 className="text-lg text-gray-200 pt-3">Search</h1>
            <div className="flex flex-col gap-2">
              <label className="text-gray-200">Destination</label>
              <input onChange={(e) => setDestination(e.target.value.toLowerCase())} placeholder={destination} type="text" className="border border-gray-300 text-gray-400 p-2 rounded" />
            </div>
            <div className="flex flex-col gap-2 pt-3">
              <label className="text-gray-200">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)} className="bg-white text-gray-400 p-2 cursor-pointer rounded">{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="pt-3">
              <label className="text-gray-200 ">Options</label>
              <div className="py-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-200">
                    Min price <small>(per night)</small>
                  </span>
                  <input onChange={(e) => setMin(e.target.value)} type="number" className="w-20 border border-gray-300 rounded" />
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-200">
                    Max price <small>(per night)</small>
                  </span>
                  <input type="number" onChange={(e) => setMax(e.target.value)} className="w-20 border border-gray-300 rounded" />
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-200">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="w-20 border text-gray-400 border-gray-300 rounded"
                    placeholder={options.adult}
                  />
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-200">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="w-20 border border-gray-300 text-gray-400 rounded"
                    placeholder={options.children}
                  />
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-200">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="w-20 border border-gray-300 text-gray-400 rounded"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick} className="bg-[#febb02] text-white py-2 rounded mt-4 w-full">Search</button>
          </div>
          {data.length == "0" ? (
            <div className="flex   flex-col md:w-[60%] w-full justify-center items-center min-h-[calc(100vh-200px)]">
              <FaFilterCircleXmark className={`text-8xl ${Dark === "light" ? "text-[#060417]" : "text-white"}`} />
              <p className={`text-xl font-semibold ${Dark === "light" ? "text-[#060417]" : "text-white"}`}>Please filter again, as there is no room in your filter.</p>
            </div>
          ) : (
            <div className="md:w-[65%] w-full">
              {loading ? (
                <Loading />
              ) : (
                <>
                  {data.map((item, i) => (
                    <SearchItem key={i} item={item} />
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
