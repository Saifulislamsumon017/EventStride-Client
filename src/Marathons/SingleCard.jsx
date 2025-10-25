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

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-md transition duration-300 ease-in-out">
      <img
        src={image}
        alt={title || 'Marathon Image'}
        className="h-48 w-full object-cover rounded"
      />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>

      <div className="flex items-center space-x-2 my-3">
        <FaLocationDot size={20} />
        <p>{location}</p>
      </div>

      <div className="flex items-center space-x-2 text-sm">
        <FcCalendar size={20} />
        <p>
          {formatDate(registrationStartDate)} -{' '}
          {formatDate(registrationEndDate)}
        </p>
      </div>

      <Link
        to={`/marathons/${_id}`}
        className="inline-block mt-4 bg-[#c0122d] text-white px-5 py-2 rounded hover:bg-[#c0122cda] transition"
        aria-label={`See details for ${title}`}
      >
        See Details
      </Link>
    </div>
  );
};

export default SingleCard;
