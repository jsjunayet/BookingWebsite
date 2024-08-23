import React from 'react';

const FeaturedSkeleton = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:mx-0 mx-2">
  <div className="md:w-[250px] w-full h-[320px] rounded-2xl border-[5px] border-[#3182CE] relative">
    <div className="w-full h-full bg-gray-300 animate-pulse rounded-xl"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-[#213c4538] backdrop-blur-sm rounded-xl flex flex-col justify-center items-center opacity-100">
      <div className="w-24 h-6 bg-gray-300 animate-pulse rounded"></div>
      <div className="w-32 h-6 bg-gray-300 animate-pulse rounded mt-2"></div>
    </div>
  </div>
  <div className="md:w-[250px] w-full h-[320px] rounded-2xl border-[5px] border-[#3182CE] relative">
    <div className="w-full h-full bg-gray-300 animate-pulse rounded-xl"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-[#213c4538] backdrop-blur-sm rounded-xl flex flex-col justify-center items-center opacity-100">
      <div className="w-24 h-6 bg-gray-300 animate-pulse rounded"></div>
      <div className="w-32 h-6 bg-gray-300 animate-pulse rounded mt-2"></div>
    </div>
  </div>
  <div className="md:w-[250px] w-full h-[320px] rounded-2xl border-[5px] border-[#3182CE] relative">
    <div className="w-full h-full bg-gray-300 animate-pulse rounded-xl"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-[#213c4538] backdrop-blur-sm rounded-xl flex flex-col justify-center items-center opacity-100">
      <div className="w-24 h-6 bg-gray-300 animate-pulse rounded"></div>
      <div className="w-32 h-6 bg-gray-300 animate-pulse rounded mt-2"></div>
    </div>
  </div>
  <div className="md:w-[250px] w-full h-[320px] rounded-2xl border-[5px] border-[#3182CE] relative">
    <div className="w-full h-full bg-gray-300 animate-pulse rounded-xl"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-[#213c4538] backdrop-blur-sm rounded-xl flex flex-col justify-center items-center opacity-100">
      <div className="w-24 h-6 bg-gray-300 animate-pulse rounded"></div>
      <div className="w-32 h-6 bg-gray-300 animate-pulse rounded mt-2"></div>
    </div>
  </div>
        </div>

    );
};

export default FeaturedSkeleton;