import React from 'react';

const FeaturedPropertiesSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto pb-10">
      <div className="mx-2 md:mx-0">
        <h1 className="my-6 text-xl font-semibold bg-gray-300 rounded w-2/4 h-6 animate-pulse"></h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-gray-100 shadow-lg rounded-xl overflow-hidden animate-pulse">
              <div className="relative">
                <div className="h-48 w-full bg-gray-300"></div>
                <div className="absolute left-5 -bottom-4 mt-2 bg-gray-300 border   w-3/6 h-8 rounded-lg"></div>
              </div>
                <div className="bg-gray-300 rounded-full mt-5 w-3/4 h-4"></div>
              <div className="pt-2 px-5 bg-gray-300 w-[90%] h-6 mt-2 rounded"></div>
              <div className="px-5 pb-3 pt-2 bg-gray-300 w-full h-12 mt-2 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPropertiesSkeleton;
