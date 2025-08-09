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
      <h1 className="text-center text-4xl pb-4">Upcoming Registered Events</h1>
      <p className=" w-2/5 mx-auto text-center pb-6">
        Browse scheduled marathons and plan your participation in advance.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {marathons.map((marathon, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 shadow hover:shadow-md transition duration-300 ease-in-out"
          >
            <img
              src={marathon.image}
              alt={marathon.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{marathon.title}</h2>
              <p className="text-sm ">{marathon.location}</p>
              <p className="text-sm  mb-2">
                {marathon.distance} | Starts: {marathon.marathonStartDate}
              </p>
              <p className="text-sm ">{marathon.description}</p>
              {/* <button className="inline-block mt-4 bg-[#c0122d] text-white px-5 py-2 rounded hover:bg-[#c0122cda] transition">
                View Details
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMarathon;
