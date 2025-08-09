import React, { use } from 'react';
import MarathonRaw from './MarathonRaw';
import MarathonCard from './MarathonCard';

const MyMarathonList = ({ myMarathonsLoader }) => {
  const initialMarathons = use(myMarathonsLoader);

  return (
    <div className="min-h-screen pt-10 px-4 md:px-8 lg:px-12 md:ml-[320px]">
      <div className="max-w-[1200px] mx-auto w-full">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
          My Listed Marathons
        </h1>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto border rounded-xl p-6 shadow hover:shadow-md transition duration-300 ease-in-out">
          <table className="w-full min-w-[800px] text-left border-collapse table-auto">
            <thead className=" uppercase tracking-wide">
              <tr>
                <th className="py-4 px-6 border-b border-gray-300 dark:border-gray-600">
                  #Sl
                </th>
                <th className="py-4 px-6 border-b border-gray-300 dark:border-gray-600">
                  Image
                </th>
                <th className="py-4 px-6 border-b border-gray-300 dark:border-gray-600">
                  Company Name
                </th>
                <th className="py-4 px-6 border-b border-gray-300 dark:border-gray-600">
                  Marathon Title
                </th>
                <th className="py-4 px-6 border-b border-gray-300 dark:border-gray-600">
                  Location
                </th>
                <th className="py-4 px-6 border-b border-gray-300 dark:border-gray-600">
                  Start Date
                </th>
                <th className="py-4 px-6 border-b border-gray-300 dark:border-gray-600 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
              {initialMarathons.map((marathon, index) => (
                <MarathonRaw
                  key={marathon._id}
                  marathon={marathon}
                  index={index}
                  marathons={initialMarathons}
                  setMarathons={() => {}} // Assuming you handle state lifting elsewhere
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-8 mt-10">
          {initialMarathons.map((marathon, index) => (
            <MarathonCard
              key={marathon._id}
              marathon={marathon}
              index={index}
              marathons={initialMarathons}
              setMarathons={() => {}} // Same as above
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyMarathonList;
