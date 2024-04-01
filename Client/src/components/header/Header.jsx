import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useContext, useState, useRef, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";
import { da } from "date-fns/locale";
import img1 from "../../assest/bannar.jpg";
import img2 from "../../assest/img1.jpg";
import img3 from "../../assest/romm.jpg";
import { ThemContext } from "../../Context/ThemContext";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();
  const { Dark } = useContext(ThemContext);

  const dateRef = useRef(null);
  const optionsRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setOpenDate(false);
      }
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setOpenOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    dispatch({
      type: "NEW_SEARCH",
      payload: { destination, dates, options },
    });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div className={`max-w-5xl  mx-auto md:pb-24 pb-10`}>
      <div className="md:flex hidden md:block gap-[100px]">
        <div className="  pt-24 w-[45%] ">
          <h1
            class={`text-6xl font-bold  leading-tight tracking-tight ${Dark === "light" ? "text-gray-900" : " text-gray-200"
              }`}
          >
            Welcome to Online Booking
          </h1>

          <p className=" text-gray-400 pt-12">
            "Explore a curated collection of hotels, resorts, and villas with
            Online Booking. Find your ideal stay that fits your preferences and
            budget effortlessly."
          </p>
        </div>
        <div className="w-[45%] text-black">
          <div className="flex gap-2 pt-24">
            <div className="w-[50%] space-y-2">
              <img src={img1} className=" h-44 rounded" alt="" />
              <img src={img2} className=" h-44 rounded" alt="" />
            </div>
            <div className="w-[50%]">
              <img src={img3} className="h-[360px] rounded" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 md:mx-0 pt-20">
        <div className="w-full md:absolute gap-2 md:mt-0 md:h-[30px] bg-white border-[3px] border-[#febb02] md:flex flex flex-col md:flex-row  justify-center md:justify-around items-center max-w-5xl py-6 ">
          <div className="md:w-[28%] md:border-none border-b-2 gap-2 pb-4 border-gray-200 w-full text-center flex items-center  justify-center  md:pb-0">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
              onChange={(e) => setDestination(e.target.value.toLowerCase())}
            />
          </div>
          <div
            className="md:w-[28%] md:border-none border-b-2 gap-2 border-gray-200 w-full text-center flex items-center  justify-center pt-3 pb-5  md:pt-0 md:pb-0 "
            ref={dateRef}
          >
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
              dates[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="md:w-[28%] md:border-none border-b-2 border-gray-200 w-full gap-2 text-center flex items-center  justify-center  pt-3 pb-5  md:pt-0 md:pb-0 "
            ref={optionsRef}
          >
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
            {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.adult <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.adult}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children <= 0}
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.room <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.room}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-full md:w-[15%] text-end pt-3   md:pt-0 md:pb-0">
            <button
              className="w-full md:w-[120px] h-[50px] bg-[#0071c2] px-4 py-2 rounded-lg"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
