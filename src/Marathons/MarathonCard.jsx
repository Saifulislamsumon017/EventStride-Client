import Modal from '@/components/AllComponents/Modal';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';

const MarathonCard = ({ marathon, marathons, setMarathons }) => {
  const { _id, image, companyName, location, title, marathonStartDate } =
    marathon;

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
        fetch(`https://event-stride-server.vercel.app/marathons/${_id}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'Application/json',
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
              const remainingMarathons = marathons.filter(
                marathon => marathon._id !== _id
              );
              setMarathons(remainingMarathons);
            }
          });
      }
    });
  };
  return (
    <div className="block sm:block md:block lg:hidden xl:hidden p-4 border rounded-lg shadow-md w-full max-w-md mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <img
        className="rounded-md max-h-40 w-full object-cover"
        src={image}
        alt={`${title} marathon image`}
      />
      <h3 className="text-2xl sm:text-3xl font-Rancho mt-4 ml-1">{title}</h3>
      <div className="ml-1 mt-2 space-y-1">
        <h3 className="text-lg sm:text-xl">
          Company Name: <span className="font-semibold">{companyName}</span>
        </h3>

        <h3 className="text-lg sm:text-xl">
          Location: <span className="font-semibold">{location}</span>
        </h3>
        <h3 className="text-lg sm:text-xl">
          Start Date: <span className="font-semibold">{marathonStartDate}</span>
        </h3>
      </div>
      <div className="flex justify-between py-4 mt-4">
        <Modal marathon={marathon} />
        <Button
          onClick={() => handleDelete(_id)}
          className="flex items-center px-3 py-2 bg-red-600 hover:bg-red-700 rounded text-white text-sm transition-colors duration-200"
        >
          <RiDeleteBin6Line className="mr-1" />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default MarathonCard;
