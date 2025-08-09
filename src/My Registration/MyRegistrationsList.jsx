import React from 'react';
import RegistrationRaw from './RegistrationRaw';
import RegistrationCard from './RegistrationCard';

const MyRegistrationsList = ({ registrations, setRegistrations }) => {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-12">
      <div className="max-w-screen-xl mx-auto w-full">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto rounded-lg shadow-md border">
          <table className="w-full min-w-[900px] table-auto border-collapse">
            <thead>
              <tr>
                <th className="py-3 px-5 border-b border-gray-300 dark:border-gray-600 font-medium text-left">
                  #Sl
                </th>
                <th className="py-3 px-5 border-b border-gray-300 dark:border-gray-600 font-medium text-left">
                  Name
                </th>
                <th className="py-3 px-5 border-b border-gray-300 dark:border-gray-600 font-medium text-left">
                  Image
                </th>
                <th className="py-3 px-5 border-b border-gray-300 dark:border-gray-600 font-medium text-left">
                  Marathon Title
                </th>
                <th className="py-3 px-5 border-b border-gray-300 dark:border-gray-600 font-medium text-left">
                  Location
                </th>
                <th className="py-3 px-5 border-b border-gray-300 dark:border-gray-600 font-medium text-left">
                  Start Date
                </th>
                <th className="py-3 px-5 border-b border-gray-300 dark:border-gray-600 font-medium text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
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
        <div className="block md:hidden space-y-6 mt-8">
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
