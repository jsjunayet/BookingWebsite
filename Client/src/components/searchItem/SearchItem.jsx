import { FcRating } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const SearchItem = ({ item }) => {
  return (
    <div className="border border-gray-300 rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between md:gap-8 mb-8">
      <img
        src={item?.photos[0]}
        alt=""
        className="w-full lg:w-52 h-[270px] object-cover mb-4 md:mb-0 rounded-lg"
      />
      <div className="flex flex-col gap-2 flex-1 md:flex-none md:w-[350px] w-full">
        <div className='flex justify-between'>
          <h1 className="text-lg text-blue-600 ">{item?.city}</h1>
          <div className="flex items-center">
            <FcRating className='text-xl' />
            <button className=" text-orange-300 inline-block text-xl py-1 px-3 font-bold">{item?.rating}</button>
          </div>
        </div>
        <span className="text-sm">{item?.distance}</span>
        <span className="bg-green-600 text-white w-[150px] inline-block text-xs py-1 px-3 rounded">
          Free airport taxi
        </span>
        <span className="font-bold text-sm">{item.title}</span>
        <span className="text-sm">{item?.desc}</span>
        <span className="text-green-600 font-bold text-sm">Free cancellation </span>
        <span className="text-green-600 text-sm">
          You can cancel later, so lock in this great price today!
        </span>
        <div className="flex justify-between items-center">
          <div className='flex gap-[3px] items-center '>
            <span className="text-xl text-semibold">${item?.price}</span>
            <span className="text-xs text-gray-400">(Includes taxes and fees)</span>
          </div>
          <Link to={`/hotels/${item._id}`}><button className="bg-blue-600 text-white font-bold py-2 px-4 rounded">Details</button></Link>
        </div>

      </div>



    </div >
  );
};

export default SearchItem;
