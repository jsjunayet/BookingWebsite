import useFetch from "../../Hook/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error, refetch } = useFetch('http://localhost:5000/api/hotel?feautre=true')
  console.log(data)
  return (
    <div className="fp">
      {
        loading ? <p>Please Wait</p> :
          <>
            {
              data.map((item) => (
                <div className="fpItem">
                  <img
                    src={item?.photos[0]}
                    alt=""
                    className="fpImg"
                  />
                  <span className="fpName">{item.title}</span>
                  <span className="fpCity">{item.city}</span>
                  <span className="fpPrice">Starting from ${item.price}</span>
                  <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                </div>
              ))
            }
          </>
      }
    </div>
  );
};

export default FeaturedProperties;
