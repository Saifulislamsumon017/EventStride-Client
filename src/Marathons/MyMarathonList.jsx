import React, { use, useState } from 'react';
import MarathonRaw from './MarathonRaw';
import MarathonCard from './MarathonCard';

const MyMarathonList = ({ myMarathonsLoader }) => {
  const initialMarathons = use(myMarathonsLoader);
  const [marathons, setMarathons] = useState(initialMarathons);

  return (
    <div className="min-h-screen pt-8 px-4 md:px-6 lg:px-8 md:ml-[320px]">
      <div className="max-w-[1200px] mx-auto w-full">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-10 text-gray-800 dark:text-white">
          My Listed Marathons
        </h1>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto rounded-xl">
          <div className="w-full border border-gray-200 dark:border-gray-700 rounded-xl">
            <table className="w-full text-left border-collapse table-auto min-w-[800px]">
              <thead className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
                <tr>
                  <th className="py-3 px-4 border-b dark:border-gray-600">#</th>
                  <th className="py-3 px-4 border-b dark:border-gray-600">
                    Image
                  </th>
                  <th className="py-3 px-4 border-b dark:border-gray-600">
                    Company Name
                  </th>
                  <th className="py-3 px-4 border-b dark:border-gray-600">
                    Marathon Title
                  </th>
                  <th className="py-3 px-4 border-b dark:border-gray-600">
                    Location
                  </th>
                  <th className="py-3 px-4 border-b dark:border-gray-600">
                    Start Date
                  </th>
                  <th className="py-3 px-4 border-b text-center dark:border-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 dark:text-gray-100">
                {marathons.map((marathon, index) => (
                  <MarathonRaw
                    key={marathon._id}
                    marathon={marathon}
                    index={index}
                    marathons={marathons}
                    setMarathons={setMarathons}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-6 mt-6">
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
    </div>
  );
};

export default MyMarathonList;
