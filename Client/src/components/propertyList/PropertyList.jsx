import { useContext } from "react";
import useFetch from "../../Hook/useFetch";
import Loading from "../Loading/Loading";
import "./propertyList.css";
import { ThemContext } from "../../Context/ThemContext";
import PropertyListSkeleton from "../SkeletonCompent/PropertyListSkeleton";

const PropertyList = () => {
  const { Dark } = useContext(ThemContext)
  const { data, loading, error, refetch } = useFetch('https://bookingwebsite-2.onrender.com/api/hotel/countBytype')
  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
  ]
  return (
    <div className=" max-w-5xl mx-auto ">
      <div className=" md:mx-0 mx-2">
        <h1 className={`my-6 text-xl font-semibold ${Dark === "light" ? "text-gray-700" : "text-gray-200"}`}>"Kindly peruse by property type."</h1>

        <div >
          {
            loading ? <PropertyListSkeleton/> : (

              <div className="grid md:grid-cols-5 grid-cols-2 gap-2">
                {
                  images.map((img, i) => (

                    <div data-aos="fade-down" key={i} className="pListItem">
                      <img
                        src={img}
                        alt=""
                        className="pListImg"
                      />
                      <div className="pListTitles mt-2">
                        <h1>{data[i]?.type}</h1>
                        <h2>{data[i]?.count} {data[i]?.type} </h2>
                      </div>
                    </div>


                  ))
                }
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
