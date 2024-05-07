import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-6">
        <Navbar />
        <div className="p-5">
          <h1 className="text-2xl font-bold mb-5">{title}</h1>
          <div className="flex">
            <div className="w-1/2 pr-5">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <div className="w-1/2">
              <form>
                <div className="mb-3">
                  <label htmlFor="file" className="flex items-center">
                    Image: <DriveFolderUploadOutlinedIcon className="w-5 h-5 ml-1" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="hidden"
                  />
                </div>
                {inputs.map((input) => (
                  <div className="mb-3" key={input.id}>
                    <label className="block mb-1">{input.label}</label>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                ))}
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
