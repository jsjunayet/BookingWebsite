
import React from 'react';

const PropertyListSkeleton = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 w-full gap-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="">
          <div className="p-4 w-full h-36 bg-gray-200 rounded-lg animate-pulse"/>
          <div className="space-y-2 mt-2">
            <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
            <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
          </div>
          </div>
      ))}
    </div>

  );
};

export default PropertyListSkeleton;
