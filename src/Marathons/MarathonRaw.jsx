import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

const MarathonRaw = ({ marathon, index }) => {
  const { image, companyName, location, title, marathonStartDate } = marathon;
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
        <button
          // onClick={handleUpdate}
          className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
        >
          <FaRegEdit className="inline mr-1" />
          Update
        </button>
        <button
          // onClick={handleDelete}
          className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
        >
          <RiDeleteBin6Line className="inline mr-1" />
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MarathonRaw;
