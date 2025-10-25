import React from 'react';
import { Link } from 'react-router';
import { MapPin } from 'lucide-react';
import { Flag } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Clock } from 'lucide-react';
import { FaLocationDot, FaRegistered } from 'react-icons/fa6';
import { FcCalendar } from 'react-icons/fc';
import { FaLayerGroup } from 'react-icons/fa';

const UpcomingCard = ({ marathon }) => {
  const {
    _id,
    image,
    title,
    location,
    distance,
    marathonStartDate,
    registrationStartDate,
    registrationEndDate,
    status,
  } = marathon;

  const isRegisterActive = () => {
    const today = new Date();
    const regStart = new Date(registrationStartDate);
    const regEnd = new Date(registrationEndDate);
    return today >= regStart && today <= regEnd;
  };

  const formatDate = dateStr => {
    const d = new Date(dateStr);
    return `${String(d.getDate()).padStart(2, '0')}/${String(
      d.getMonth() + 1
    ).padStart(2, '0')}/${d.getFullYear()}`;
  };

  return (
    <div className="relative border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 bg-white dark:bg-gray-800">
      {/* Ribbon */}
      <div className="absolute top-3 left-2 z-10">
        <div className="bg-yellow-400 text-yellow-900 text-xs sm:text-sm px-2 py-1 transform shadow-lg whitespace-nowrap rounded-full">
          {status === 'coming_soon' ? 'Coming Soon' : status}
        </div>
      </div>

      {/* Image */}
      <img
        src={image}
        alt={title || 'Marathon Image'}
        className="h-48 w-full object-cover rounded"
      />

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2 truncate">
          {title}
        </h2>

        {/* Location */}
        <div className="flex items-center space-x-2 mb-1 text-sm sm:text-base text-gray-600 dark:text-gray-300">
          <FaLocationDot size={20} />
          <span>{location}</span>
        </div>

        {/* Registration Dates */}
        <div className="flex items-center space-x-2 mb-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
          <FaRegistered size={20} />
          <span>
            {formatDate(registrationStartDate)} -{' '}
            {formatDate(registrationEndDate)}
          </span>
        </div>

        {/* Distance & Marathon Start */}
        <div className="flex items-center space-x-4 text-sm sm:text-base  font-medium mb-2">
          <div className="flex items-center space-x-1">
            <FaLayerGroup size={16} />
            <span>{distance}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FcCalendar size={20} />
            <span>{formatDate(marathonStartDate)}</span>
          </div>
        </div>

        {/* Register Button */}
        <div className="mt-4">
          {isRegisterActive() ? (
            <Link to={`/marathons/${_id}`}>
              <button className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-[#c0122d] text-white rounded hover:bg-[#c0122cda] transition">
                Register
              </button>
            </Link>
          ) : (
            <button
              disabled
              className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-gray-400 text-white rounded cursor-not-allowed"
            >
              Register
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;
