
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setinfo]=useState({})
  const [loading, setloading]=useState(false)
  const handlechange = (e)=>{
    setinfo(prev=>({...prev, [e.target.id]: e.target.value}))
  }

  const [isAdmin, setIsAdmin] = useState(null)
  const handleRoleChange = (e) => {
    const roleValue = e.target.value === "admin" ? true : false;
    setIsAdmin(roleValue);
  };
  const resetForm = () => {
    setFile(null);
    setinfo({});
    setIsAdmin(null);
  };
  const handleClick = async (e)=>{
    setloading(true)
    e.preventDefault();
    const data = new FormData();
    data.append("file",file);
    data.append("upload_preset", "upload")
    data.append("cloud_name", "dzxzxdsnq")
    try{
      const uploadres = await axios.post("https://api.cloudinary.com/v1_1/dzxzxdsnq/image/upload",data)
      const {url}=uploadres.data
      const newuser = {
        ...info,
        ProfilePik: url,
        isAdmin:isAdmin
      }
      console.log(newuser)
     const res = await axios.post("https://bookingwebsite-2.onrender.com/api/auth/Resistor",newuser);
     console.log(res.data)
      if (res.data) {
        toast.success("Successfully added.");
        resetForm();
        setloading(false)
      }

    }catch(err){
      toast.error(`${err.message}`)
      setloading(false)
    }
  }

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
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
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
                  onChange={(e) => setFile(e.target.files[0])}
                  className="hidden"
                />
              </div>

             <div className="grid grid-cols-2 gap-10">
             {inputs.map((input) => (
                <div className="w-full" key={input.id}>
                  <label  className="capitalize">{input.label}</label>
                  <input
                  onChange={handlechange}
                    type={input.type}
                    id={input.label}
                    placeholder={input.placeholder}
                    className="w-full p-1 border-b border-gray-400 focus:outline-none"
                  />
                </div>
              ))}
               <div className="w-full">
                  <label>Role</label>
                  <select
                    onChange={handleRoleChange}
                    className="w-full p-1 border-b border-gray-400 focus:outline-none"
                  >
                    <option value="" disabled>Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>
                
              <button disabled={loading} onClick={handleClick} className=" p-2 bg-teal-600 text-white font-bold cursor-pointer mt-2 ">
                {
                  loading?"Sending...":"Send"
                }
              </button>
             </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
