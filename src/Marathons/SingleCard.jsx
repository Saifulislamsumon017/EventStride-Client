import { FaLocationDot } from 'react-icons/fa6';

import { FcCalendar } from 'react-icons/fc';
import { Link } from 'react-router';

const SingleCard = ({ marathon }) => {
  const {
    _id,
    image,
    title,
    location,
    registrationStartDate,
    registrationEndDate,
  } = marathon;

  // Format function: "day:month:year"
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}:${month}:${year}`;
  }

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-md transition">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover rounded"
      />
      <h2 className="text-xl font-semibold mt-3">{title}</h2>

      <div className="flex items-center space-x-1 my-2">
        <FaLocationDot size={20} />
        <p className="text-gray-600">{location}</p>
      </div>

      <div className="flex items-center space-x-1">
        <FcCalendar size={20} />
        <p className="text-sm text-gray-500">
          {formatDate(registrationStartDate)} -{' '}
          {formatDate(registrationEndDate)}
        </p>
      </div>

      <Link to={`/marathons/${_id}`}>
        <button className="mt-3 bg-[#c0122d] text-white px-4 py-2 rounded hover:bg-[#c0122cda]">
          See Details
        </button>
      </Link>
    </div>
  );
};

export default SingleCard;
