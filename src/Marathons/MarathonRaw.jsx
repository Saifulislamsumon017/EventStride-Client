import Modal from '@/components/AllComponents/Modal';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';

const MarathonRaw = ({ marathon, index, marathons, setMarathons }) => {
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
        fetch(`http://localhost:3000/marathons/${_id}`, {
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
    <tr>
      <td className="px-4 py-3 border">{index + 1}</td>

      <td className="px-4 py-3 border">
        <img src={image} className="w-14 h-10 rounded" alt="" />
      </td>
      <td className="px-4 py-3 border">{companyName}</td>

      <td className="px-4 py-3 border">{title}</td>
      <td className="px-4 py-3 border">{location}</td>
      <td className="px-4 py-3 border">{marathonStartDate}</td>
      <td className="px-4 py-3 flex justify-center items-center  gap-3 border">
        <Modal marathon={marathon} />
        <Button
          onClick={() => handleDelete(_id)}
          className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
        >
          <RiDeleteBin6Line className="inline" />
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default MarathonRaw;
