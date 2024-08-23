import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { faL } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../../../Hook/useFetch";

const HotelNew = ({ inputs, title }) => {
  const [files, setFiles] = useState([]);
  const [info, setInfo] = useState({});
  const [feature, setFeature] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data: rooms, loading:load, error, refetch } = useFetch(`https://bookingwebsite-2.onrender.com/api/room`);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInfo(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const resetForm = () => {
    setFiles([]);
    setInfo({});
  };

  const handleRoomSelection = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedRooms(selectedOptions);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const uploadedPhotos = await Promise.all(files.map(async file => {
        const data = new FormData();
        data.append("file", files);
        data.append("upload_preset", "upload");
        data.append("cloud_name", "dzxzxdsnq");

        const uploadres = await axios.post("https://api.cloudinary.com/v1_1/dzxzxdsnq/image/upload", data);
        return uploadres.data.url;
      }));

      const newHotel = {
        ...info,
        photos: uploadedPhotos,
        rooms: selectedRooms,
        feature: feature
      };
      console.log(newHotel)

      const res = await axios.post("https://bookingwebsite-2.onrender.com/api/hotel", newHotel);
      
      if (res.data) {
        toast.success("Successfully added.");
        resetForm();
      }
    } catch (err) {
      toast.error(`${err.message}`);
      setLoading(false)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="flex-6">
        <Navbar />
        <div className="shadow-md p-4 m-5">
          <h1 className="text-gray-400 text-xl">{title}</h1>
        </div>
        <div className="flex shadow-md p-4 m-5 w-full">
          <div className="w-[20%] mr-20 ">
            <img
              src={files.length > 0 ? URL.createObjectURL(files[0]) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=""
              className="h-40 w-40 rounded-full"
            />
          </div>
          <div className="w-[80%]">
            <form className="flex flex-wrap gap-7 justify-around">
              <div className="w-full">
                <label htmlFor="file" className="flex items-center gap-2 cursor-pointer">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles([...e.target.files])}
                  className="hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-10">
                {inputs.map((input) => (
                  <div className="w-full" key={input.id}>
                    <label className="capitalize">{input.label}</label>
                    <input
                      onChange={handleChange}
                      type={input.type}
                      id={input.label}
                      placeholder={input.placeholder}
                      className="w-full p-1 border-b border-gray-400 focus:outline-none"
                    />
                  </div>
                ))}
                <div className="w-full">
                  <label htmlFor="rooms">Rooms</label>
                  <select
                    id="rooms"
                    multiple
                    className="w-full p-1 border-b border-gray-400 focus:outline-none"
                    value={selectedRooms}
                    onChange={handleRoomSelection}
                  >
                    {load ? (
                      <option disabled>Loading...</option>
                    ) : (
                      rooms.map(room => (
                        <option key={room._id} value={room._id}>
                          {room.title}
                        </option>
                      ))
                    )}
                  </select>
                </div>

                <div className="w-full">
                  <label>Feature</label>
                  <select
                    onChange={(e) => setFeature(e.target.value)}
                    className="w-full p-1 border-b border-gray-400 focus:outline-none"
                  >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
                <button disabled={loading} onClick={handleClick} className=" col-span-2 p-2 bg-teal-600 text-white font-bold cursor-pointer mt-2 ">
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelNew;
