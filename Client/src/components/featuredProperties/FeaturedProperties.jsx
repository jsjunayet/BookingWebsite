import useFetch from "../../Hook/useFetch";
import Loading from "../Loading/Loading";
import "./featuredProperties.css";
import { FaLocationDot } from "react-icons/fa6";

const FeaturedProperties = () => {
  const { data, loading, error, refetch } = useFetch('http://localhost:5000/api/hotel?feautre=true')
  return (
    <div className=" max-w-5xl mx-auto">
      {
        loading ? <Loading></Loading> :
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-4">
            {
              data.map((item) => (
                <div className=" bg-base-200 p-5">
                  <img
                    src={item?.photos[0]}
                    alt=""
                    className=""
                  />
                  <p className="">{item.title}</p>
                  <p className=""><FaLocationDot /> {item.city}</p>
                  <p className="">Starting from ${item.price}</p>
                  <div className="">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
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
