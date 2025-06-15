import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

const MarathonCard = ({ marathon }) => {
  const { image, companyName, location, title, marathonStartDate } = marathon;
  return (
    <div className="p-4 border rounded-lg shadow-sm text-sm w-full text-black transition">
      <img
        className="rounded-md max-h-40 w-full object-cover"
        src={image}
        alt="Marathon"
      />
      <h3 className="text-3xl font-Rancho ml-2 mt-2">{title}</h3>
      <div className="ml-2">
        <h3 className="text-xl mt-1">
          Company Name : <span className="font-semibold">{companyName}</span>
        </h3>

        <h3 className="text-xl mt-1">
          Location: <span className="font-semibold">{location}</span>
        </h3>
        <h3 className="text-xl mt-1">
          Start Date: <span className="font-semibold">{marathonStartDate}</span>
        </h3>
      </div>
      <div className="flex justify-between py-4">
        <button
          // onClick={handleUpdate}
          className="px-3 py-2 flex items-center bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
        >
          <FaRegEdit className="inline mr-1" />
          Update
        </button>
        <button
          // onClick={handleDelete}
          className="px-3 py-2 flex items-center bg-red-500 text-white text-sm rounded hover:bg-red-600"
        >
          <RiDeleteBin6Line className="inline mr-1" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default MarathonCard;
