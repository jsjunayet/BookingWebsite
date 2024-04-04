import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../Hook/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";
import { AuthContext } from "../../Context/AuthContext";
import Reserve from "../../components/Reserve/Reserve";
import Loading from "../../components/Loading/Loading";
import { ThemContext } from "../../Context/ThemContext";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("hotels/")[1];
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const { data, loading, error, refetch } = useFetch(
    `http://localhost:5000/api/hotel/get/${id}`
  );
  const { dates, options } = useContext(SearchContext);
  console.log(options);
  const dayDifferent = (date1, date2) => {
    const endDate = new Date(date1);
    const startDate = new Date(date2);

    const MILISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    const timeDifference = Math.abs(endDate.getTime() - startDate.getTime());
    const dayDifference = Math.floor(timeDifference / MILISECONDS_PER_DAY) + 1;
    return dayDifference;
  };

  const differenceInDays =
    dates[0]?.endDate && dates[0]?.startDate
      ? dayDifferent(dates[0]?.endDate, dates[0]?.startDate)
      : 0;
  const { user } = useContext(AuthContext)
  const handleClick = () => {
    if (user) {
      setOpenModel(true);
    } else {
      navigate("/login", { state: id });
    }
  };
  const { Dark } = useContext(ThemContext);

  const photos = [
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div
      className={`relative  pt-16 ${Dark === "light" ? "" : "bg-[#060417] text-white"
        }`}
    >
      <Navbar />
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="flex justify-center">
          {open && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="absolute top-4 right-4 text-gray-300 text-3xl cursor-pointer"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="absolute left-4 text-gray-300 text-5xl cursor-pointer"
                onClick={() => handleMove("l")}
              />
              <div className="flex justify-center w-full">
                <img
                  src={photos[slideNumber].src}
                  alt=""
                  className="w-4/5 sm:w-3/5 lg:w-1/2 max-w-2xl"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="absolute right-4 text-gray-300 text-5xl cursor-pointer"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          {openModel && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <Reserve RoomName={data?.name} title={data.title} time={differenceInDays} price={data?.price * options.room * differenceInDays} img={data?.photos[0]} City={data?.city} isopen={setOpenModel} hoteId={id}></Reserve>
            </div>
          )}
          <div className="max-w-5xl  mx-auto">

            <div className=" md:flex mx-3 lg:mx-0 justify-between items-center">
              <div>
                <h1 className="text-3xl font-semibold">{data?.city}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{data.address}</span>
                </div>
                <span className="text-blue-600 font-semibold">{data?.desc}</span>
                <span className="text-green-600 font-semibold block mb-4">
                  Book a stay over ${data?.price} at this property and get a free
                  airport taxi
                </span>
              </div>
              <button
                onClick={handleClick}
                className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg mb-4"
              >
                Reserve or Book Now!
              </button>
            </div>
            <div className="mx-3 lg:mx-0 grid md:grid-cols-3 grid-cols-2 gap-x-2">
              {photos.map((photo, i) => (
                <div
                  key={i}
                  className="w-full cursor-pointer"
                  onClick={() => handleOpen(i)}
                >
                  <img
                    src={photo.src}
                    alt=""
                    className="w-full mb-2 rounded-lg"
                  />
                </div>
              ))}
            </div>
            <div className="md:flex mx-3 lg:mx-0 justify-between mb-8">
              <div className="w-full mb-8 sm:w-3/4">
                <h1 className="text-2xl font-semibold mb-4">
                  Stay in the heart of City
                </h1>
                <p className={`md:text-lg text-sm ${Dark === "light" ? "text-gray-500" : "text-gray-300"}`}>
                  Located a 5-minute walk from St. Florian's Gate in Krakow,
                  Tower Street Apartments has accommodations with air
                  conditioning and free WiFi. The units come with hardwood
                  floors and feature a fully equipped kitchenette with a
                  microwave, a flat-screen TV, and a private bathroom with
                  shower and a hairdryer. A fridge is also offered, as well as
                  an electric tea pot and a coffee machine. Popular points of
                  interest near the apartment include Cloth Hall, Main Market
                  Square and Town Hall Tower. The nearest airport is John Paul
                  II International Kraków–Balice, 16.1 km from Tower Street
                  Apartments, and the property offers a paid airport shuttle
                  service.
                </p>
              </div>
              <div className="w-full sm:w-1/4 bg-[#febb02] p-4 rounded-lg">
                <h1 className="text-lg font-semibold my-3">
                  Perfect for a {differenceInDays}-night stay!
                </h1>
                <p className="text-sm mb-2">
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </p>
                <h2 className="text-lg font-semibold mb-2">
                  <b>${data.price * options.room * differenceInDays}</b> (
                  {differenceInDays}-night)
                </h2>
                <button
                  onClick={handleClick}
                  className="bg-blue-500 text-white font-semibold py-2 mt-2 px-6 rounded-lg"
                >
                  Reserve or Book Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hotel;
