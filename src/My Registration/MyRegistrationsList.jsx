import React, { use } from 'react';
import RegistrationRaw from './RegistrationRaw';
import RegistrationCard from './RegistrationCard';

const MyRegistrationsList = ({ myRegistration }) => {
  const registrations = use(myRegistration);
  console.log(registrations);
  return (
    <div className=" w-11/12 mx-auto overflow-x-auto">
      <div className="hidden md:block ml-[320px] h-screen">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border">#Sl</th>
              <th className="py-3 px-4 border">Name</th>
              <th className="py-3 px-4 border">Image</th>

              <th className="py-2 px-4 border">Marathon Title</th>
              <th className="py-3 px-4 border">Location</th>
              <th className="py-2 px-4 border">Start Date</th>

              <th className="py-2 px-4 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((registration, index) => (
              <RegistrationRaw
                key={registration._id}
                registration={registration}
                index={index}
              ></RegistrationRaw>
            ))}
          </tbody>
        </table>
      </div>
      <div className="block md:hidden space-y-4 mt-5">
        {registrations.map((registration, index) => (
          <RegistrationCard
            key={registration._id}
            registration={registration}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default MyRegistrationsList;
