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
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      console.log(result.isConfirmed);
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
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });

              //Remove Data from UI
              const remainingRegistrations = registrations.filter(
                registration => registration._id !== _id
              );
              setRegistrations(remainingRegistrations);
            }
          });
      }
    });
  };
  return (
    <div className="p-4 border rounded-lg shadow-sm text-sm w-full text-black transition">
      <img
        className="rounded-md max-h-40 w-full object-cover"
        src={image}
        alt="Marathon"
      />
      <h3 className="text-3xl font-Rancho ml-2 mt-2">{marathonTitle}</h3>
      <div className="ml-2">
        <h3 className="text-xl mt-1">
          Applicant: <span className="font-semibold">{firstName}</span>
        </h3>
        <h3 className="text-xl mt-1">
          Location: <span className="font-semibold">{location}</span>
        </h3>
        <h3 className="text-xl mt-1">
          Start Date: <span className="font-semibold">{marathonStartDate}</span>
        </h3>
      </div>
      <div className="flex justify-between py-4">
        <RegistrationModal registration={registration} />
        <Button
          onClick={() => handleDelete(_id)}
          className="px-3 py-2 flex items-center bg-red-500 text-white text-sm rounded hover:bg-red-600"
        >
          <RiDeleteBin6Line className="inline mr-1" />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default RegistrationCard;
