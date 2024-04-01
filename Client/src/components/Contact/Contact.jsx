
import img from "../../assest/backgroun-room.jpg"
const Contact = () => {
    return (
        <div className="mt-10">
            <div className=" w-full md:h-[400px] h-[650px] relative ">
                <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className=" absolute  top-0 left-0 w-full h-full bg-[#213c4538] backdrop-blur-sm rounded-xl  transition-opacity duration-300 opacity-100">
                    <div className="max-w-5xl mx-auto">
                        <div className=" md:flex md:justify-between flex flex-col md:flex-row gap-y-4 md:gap-x-0 md:items-center pt-5">
                            <div className="text-white px-2 md:px-0  md:w-1/2 w-full">
                                <h1 className="text-3xl font-semibold text-gray-200 mb-4">Welcome to Our Hotel Booking Website</h1>
                                <p className="text-gray-300 w-">Explore our luxurious accommodations and book your next unforgettable stay with us. Whether it's for business or pleasure, we guarantee a comfortable and memorable experience.</p>
                                <button className=" bg-[#febb02] px-5 py-3 text-xl rounded-md mt-5">Book Now</button> <button className=" ml-6 bg-[#6751b9] px-5 py-3 text-xl rounded-md mt-5">Explore</button>
                            </div>
                            <div className=" md:w-[45%] px-2 mt-2 md:px-0  w-full">
                                <form >
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block  font-bold  mb-2 text-white">Name</label>
                                        <input type="text" id="name" name="name" className=" w-full text-xl text-gray-300 rounded-lg bg-transparent  border-[#febb02] border-2 px-3 py-1" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block  font-bold  mb-2 text-white">Email</label>
                                        <input type="email" id="email" name="email" className=" w-full text-xl text-gray-300 rounded-lg bg-transparent  border-[#febb02] border-2 px-3 py-1" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="message" className="block  font-bold  mb-2 text-white">Message</label>
                                        <textarea id="message" name="message" className=" w-full text-xl text-gray-300 rounded-lg bg-transparent  border-[#febb02] border-2  px-3 py-1"></textarea>
                                    </div>
                                    <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Contact;