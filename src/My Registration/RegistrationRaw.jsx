import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import RegistrationModal from './RegistrationModal';
import { Button } from '@/components/ui/button';

const RegistrationRaw = ({
  registration,
  index,
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
        fetch(`https://event-stride-server.vercel.app/registration/${_id}`, {
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
    <tr>
      <td className="px-4 py-3 border">{index + 1}</td>
      <td className="px-4 py-3 border">{firstName}</td>
      <td className="px-4 py-3 border">
        <img src={image} className="w-14 h-10 rounded" alt="" />
      </td>

      <td className="px-4 py-3 border">{marathonTitle}</td>
      <td className="px-4 py-3 border">{location}</td>
      <td className="px-4 py-3 border">{marathonStartDate}</td>
      <td className="px-4 py-3 flex justify-center items-center  gap-3 border">
        <RegistrationModal registration={registration} />
        <Button
          onClick={() => handleDelete(_id)}
          className="px-3 py-1 bg-[#c0122d] text-white text-sm rounded hover:bg-[#c0122d]"
        >
          <RiDeleteBin6Line className="inline" />
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default RegistrationRaw;
