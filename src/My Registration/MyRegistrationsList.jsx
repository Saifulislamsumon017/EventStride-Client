import React from 'react';
import RegistrationRaw from './RegistrationRaw';
import RegistrationCard from './RegistrationCard';

const MyRegistrationsList = ({ registrations, setRegistrations }) => {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto w-full">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto rounded-xl">
          <table className="w-full min-w-[900px] border border-gray-200 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800 text-left text-gray-800 dark:text-gray-200">
              <tr>
                <th className="py-2 px-4 border dark:border-gray-600">#Sl</th>
                <th className="py-3 px-4 border dark:border-gray-600">Name</th>
                <th className="py-3 px-4 border dark:border-gray-600">Image</th>
                <th className="py-2 px-4 border dark:border-gray-600">
                  Marathon Title
                </th>
                <th className="py-3 px-4 border dark:border-gray-600">
                  Location
                </th>
                <th className="py-2 px-4 border dark:border-gray-600">
                  Start Date
                </th>
                <th className="py-2 px-4 border text-center dark:border-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
              {registrations.map((registration, index) => (
                <RegistrationRaw
                  key={registration._id}
                  registration={registration}
                  index={index}
                  registrations={registrations}
                  setRegistrations={setRegistrations}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="block md:hidden space-y-6 mt-6">
          {registrations.map((registration, index) => (
            <RegistrationCard
              key={registration._id}
              registration={registration}
              index={index}
              registrations={registrations}
              setRegistrations={setRegistrations}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyRegistrationsList;
