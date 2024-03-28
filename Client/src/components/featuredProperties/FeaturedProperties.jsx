import useFetch from "../../Hook/useFetch";
import Loading from "../Loading/Loading";
import "./featuredProperties.css";
import { FaLocationDot } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";

const FeaturedProperties = () => {
  const { data, loading, error, refetch } = useFetch('http://localhost:5000/api/hotel?feautre=true')
  return (
    <div className=" max-w-5xl mx-auto">
      {
        loading ? <Loading></Loading> :
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-3">
            {
              data.map((item) => (
                <div className=" bg-base-200 p-5">
                  <img
                    src={item?.photos[0]}
                    alt=""
                    className=""
                  />
                  <button className="rounded-lg bg-[#005C99] text-white font-semibold px-4 py-1">{item?.name}</button>
                  <h2 className="">{item.title}</h2>
                  <h5>{item.desc}</h5>

                  <div className="flex gap-3 items-center">
                    <FaLocationDot />
                    <p className=""><span>{item?.address}</span>,{item?.city}</p>
                  </div>
                  <hr className="  bg-gray-400" />
                  <div className="flex gap-2">
                    <p className="flex gap-1 items-center"> <span><FcRating />  </span>{item?.rating}</p>
                    <p> from ${item.price} per Room</p>
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
