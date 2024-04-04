import useFetch from "../../Hook/useFetch";
import Loading from "../Loading/Loading";
import "./featured.css";

const Featured = () => {
  const { data, loading, error, refetch } = useFetch("http://localhost:5000/api/hotel/countByCity?cities=dhaka,cumilla,rajshahi,cox's Bazar")
  return (
    <div className=" max-w-5xl mx-auto">
      {
        loading ? <Loading></Loading> : <>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:mx-0 mx-2">
            <div data-aos="zoom-in-right" data-aos-duration="1000" className="md:w-[250px] w-full h-[320px] rounded-2xl   border-[5px] border-[#3182CE] relative ">
              <img
                src="https://i.ibb.co/4dCxkd0/dhaka.jpg"
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
              <div className=" absolute top-0 left-0 w-full h-full bg-[#213c4538] backdrop-blur-sm rounded-xl flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <h1 className="text-white">Dhaka</h1>
                <h2 className="text-white font-bold">{data[0]} properties</h2>
              </div>

            </div>
            <div data-aos="zoom-in-right" data-aos-duration="1000" className="md:w-[250px] w-full h-[320px] rounded-2xl   border-[5px] border-[#3182CE] relative ">
              <img
                src="https://i.ibb.co/gZwGRLv/Rajshahi.jpg"
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
              <div className=" absolute top-0 left-0 w-full h-full bg-[#213c4538] backdrop-blur-sm rounded-xl flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <h1 className="text-white">Rajshahi </h1>
                <h2 className="text-white font-bold">{data[1]} properties</h2>
              </div>
            </div>
            <div data-aos="zoom-in-left" data-aos-duration="1000" className="md:w-[250px] w-full h-[320px] rounded-2xl   border-[5px] border-[#3182CE] relative ">
              <img
                src="https://i.ibb.co/5BzTj9R/Cumilla.jpg"
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
              <div className=" absolute top-0 left-0 w-full h-full bg-[#213c4538] backdrop-blur-sm rounded-xl flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <h1 className="text-white ">Cumilla</h1>
                <h2 className="text-white font-bold">{data[2]} properties</h2>
              </div>
            </div>

            <div data-aos="zoom-in-left" data-aos-duration="1000" className="md:w-[250px] w-full h-[320px] rounded-2xl   border-[5px] border-[#3182CE] relative ">
              <img
                src="https://i.ibb.co/BrM8jnD/Coxs-Bazar.jpg"
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
              <div className=" absolute top-0 left-0 w-full h-full bg-[#213c4538] backdrop-blur-sm rounded-xl flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <h1 className="text-white">Cox's Bazar</h1>
                <h2 className="text-white font-bold">{data[3]} properties</h2>
              </div>

            </div>
          </div>
        </>
      }
    </div>
  );
};

export default Featured;
