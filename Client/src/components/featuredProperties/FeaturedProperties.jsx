import useFetch from "../../Hook/useFetch";
import Loading from "../Loading/Loading";
import "./featuredProperties.css";
import { FaLocationDot } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";

const FeaturedProperties = () => {
  const { data, loading, error, refetch } = useFetch('http://localhost:5000/api/hotel?feautre=true')
  return (
    <div className=" max-w-5xl mx-auto mb-10">
      {
        loading ? <Loading></Loading> :
          <div className=" grid grid-cols-1 md:grid-cols-3 md:gap-y-3 gap-y-5 gap-4 lg:grid-cols-3">
            {
              data.map((item) => (
                <div className=" bg-base-100 shadow-lg md:mx-0  mx-2   rounded-xl overflow-hidden">
                  <div className="relative ">
                    <img
                      src={item?.photos[0]}
                      alt=""
                      className="h-full w-full"
                    />
                    <button className="rounded-lg  absolute left-5 -bottom-4 bg-[#005C99] text-white font-semibold px-4 py-1">{item?.name}</button>
                  </div>
                  <div className="flex gap-2 pt-6 items-center  px-5">
                    <FaLocationDot className="text-[14px] text-gray-800" />
                    <p className=" text-[14px] text-gray-500"><span>{item?.address}</span>,{item?.city}</p>
                  </div>
                  <h2 className="pt-2 px-5 text-gray-700 font-semibold text-lg">{item.title}</h2>
                  <h5 className="px-5 pb-3 pt-2 text-gray-600">{item.desc}</h5>
                  <hr className="  bg-gray-400" />
                  <div className="flex justify-between px-5 py-3">
                    <p className="flex gap-1 items-center text-gray-600"> <span><FcRating />  </span>{item?.rating}</p>
                    <p className=" text-gray-600"> from <span className="text-black font-semibold"> ${item.price}</span> Per Room</p>
                  </div>
                </div>
              ))
            }
          </div>
      }
    </div>
  );
};

export default FeaturedProperties;
