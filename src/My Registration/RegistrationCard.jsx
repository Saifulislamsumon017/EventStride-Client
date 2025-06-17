import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import RegistrationModal from './RegistrationModal';
import Swal from 'sweetalert2';
import { Button } from '@/components/ui/button';

const RegistrationCard = ({
  registration,
  registrations,
  setRegistrations,
}) => {
  const { _id, marathonTitle, marathonStartDate, firstName, location, image } =
    registration;

  const handleDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/registration/${_id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire(
                'Deleted!',
                'Your registration has been removed.',
                'success'
              );
              const remaining = registrations.filter(reg => reg._id !== _id);
              setRegistrations(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="w-full p-4 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition">
      <img
        className="w-full h-40 object-cover rounded-md mb-4"
        src={image}
        alt={marathonTitle}
      />
      <h2 className="text-2xl font-Rancho text-green-700 dark:text-green-400 mb-2">
        {marathonTitle}
      </h2>
      <div className="space-y-1 text-sm sm:text-base">
        <p>
          <span className="font-semibold">Applicant:</span> {firstName}
        </p>
        <p>
          <span className="font-semibold">Location:</span> {location}
        </p>
        <p>
          <span className="font-semibold">Start Date:</span> {marathonStartDate}
        </p>
      </div>
      <div className="flex justify-between items-center gap-4 mt-4">
        <RegistrationModal registration={registration} />
        <Button
          onClick={() => handleDelete(_id)}
          className="bg-red-600 hover:bg-red-700 text-white text-sm flex items-center gap-2 px-4 py-2 rounded"
        >
          <RiDeleteBin6Line />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default RegistrationCard;
