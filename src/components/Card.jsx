import React from 'react';

function Card({index}){
    console.log(index)
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-2">
      <div className="relative">
        <img 
          className="w-full h-56 object-cover"
          src={index.image} // Replace with your image source
          alt="Event"
        />
        {console.log(index.hostel)}
        <span className="absolute top-2 left-2 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded-full">Live</span>
        <button className="absolute top-2 right-2 bg-white text-gray-800 p-2 rounded-full shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{index.hostel},{index.country}</h3>
        <p className="text-gray-600 text-sm">{index.distance} in Km/meter</p>
        <p className="text-gray-600 text-sm">{index.booking}</p>
        <p className="text-gray-800 font-bold mt-1">{index.price}</p>
      </div>
    </div>
  );
};

export default Card;
