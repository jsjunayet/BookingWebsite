import React from 'react';

const Footer = () => {
  return (
    <div>
      <div class="max-w-5xl mx-auto md:mt-8 mt-4 ">
        <div class=" md:flex gap-3 flex-col md:mx-0 mx-2  md:flex-row justify-center md:justify-center flex gap-y-3 ">
          <div className='md:w-[22%] w-full mt-4 md:mt-0'>
            <h3 class="text-lg font-semibold mb-4">Discover</h3>
            <ul class="list-none">
              <li class="text-blue-500 cursor-pointer">Countries</li>
              <li class="text-blue-500 cursor-pointer">Regions</li>
              <li class="text-blue-500 cursor-pointer">Cities</li>
              <li class="text-blue-500 cursor-pointer">Districts</li>
              <li class="text-blue-500 cursor-pointer">Airports</li>
              <li class="text-blue-500 cursor-pointer">Hotels</li>
            </ul>
          </div>
          <div className='md:w-[22%] w-full'>
            <h3 class="text-lg font-semibold mb-4">Accommodations</h3>
            <ul class="list-none">
              <li class="text-blue-500 cursor-pointer">Homes</li>
              <li class="text-blue-500 cursor-pointer">Apartments</li>
              <li class="text-blue-500 cursor-pointer">Resorts</li>
              <li class="text-blue-500 cursor-pointer">Villas</li>
              <li class="text-blue-500 cursor-pointer">Hostels</li>
              <li class="text-blue-500 cursor-pointer">Guest houses</li>
            </ul>
          </div>
          <div className='md:w-[30%] w-full '>
            <h3 class="text-lg font-semibold mb-4">Explore</h3>
            <ul class="list-none">
              <li class="text-blue-500 cursor-pointer">Unique places to stay</li>
              <li class="text-blue-500 cursor-pointer">Reviews</li>
              <li class="text-blue-500 cursor-pointer">Unpacked: Travel articles</li>
              <li class="text-blue-500 cursor-pointer">Travel communities</li>
              <li class="text-blue-500 cursor-pointer">Seasonal and holiday deals</li>
            </ul>
          </div>
          <div className='md:w-[22%] w-full'>
            <h3 class="text-lg font-semibold mb-4">Services</h3>
            <ul class="list-none">
              <li class="text-blue-500 cursor-pointer">Car rental</li>
              <li class="text-blue-500 cursor-pointer">Flight Finder</li>
              <li class="text-blue-500 cursor-pointer">Restaurant reservations</li>
              <li class="text-blue-500 cursor-pointer">Travel Agents</li>
            </ul>
          </div>
        </div>
        <div class="text-center md:mt-5 mt-4 text-gray-600">&copy; 2022 Online_Booking. All rights reserved.</div>
      </div>

    </div>
  );
};

export default Footer;