import React, { use, useState } from 'react';
import MarathonRaw from './MarathonRaw';
import MarathonCard from './MarathonCard';

const MyMarathonList = ({ myMarathonsLoader }) => {
  const initialmarathons = use(myMarathonsLoader);
  const [marathons, setMarathons] = useState(initialmarathons);

  console.log(marathons);
  return (
    <div className=" w-11/12 mx-auto py-20 overflow-x-auto">
      <div className="hidden md:block ml-[320px]">
        <h1 className="text-center text-4xl pb-6">My Listed All Marathon</h1>
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border">#Sl</th>
              <th className="py-3 px-4 border">Image</th>
              <th className="py-2 px-4 border">Company Name</th>
              <th className="py-2 px-4 border">Marathon Title</th>
              <th className="py-3 px-4 border">Location</th>
              <th className="py-2 px-4 border">Start Date</th>

              <th className="py-2 px-4 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {marathons.map((marathon, index) => (
              <MarathonRaw
                key={marathon._id}
                marathon={marathon}
                index={index}
                marathons={marathons}
                setMarathons={setMarathons}
              ></MarathonRaw>
            ))}
          </tbody>
        </table>
      </div>
      <div className="block md:hidden space-y-4 mt-5">
        {marathons.map((marathon, index) => (
          <MarathonCard
            key={marathon._id}
            marathon={marathon}
            index={index}
            marathons={marathons}
            setMarathons={setMarathons}
          />
        ))}
      </div>
    </div>
  );
};

export default MyMarathonList;
