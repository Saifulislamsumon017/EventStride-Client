import React, { useEffect, useState } from 'react';

const UpcomingMarathon = () => {
  const [marathons, setMarathons] = useState([]);

  useEffect(() => {
    fetch('/marathons.json')
      .then(res => res.json())
      .then(data => setMarathons(data))
      .catch(err => console.error('Failed to fetch marathons:', err));
  }, []);

  return (
    <div className="py-20">
      <h1 className="text-center text-4xl">Upcoming Registered Events</h1>
      <p className=" w-2/5 mx-auto text-center pb-6">
        Browse scheduled marathons and plan your participation in advance.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {marathons.map((marathon, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden"
          >
            <img
              src={marathon.image}
              alt={marathon.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{marathon.title}</h2>
              <p className="text-sm text-gray-500">{marathon.location}</p>
              <p className="text-sm text-gray-500 mb-2">
                {marathon.distance} | Starts: {marathon.marathonStartDate}
              </p>
              <p className="text-sm text-gray-600">{marathon.description}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMarathon;
