import React from 'react';

const OverviewCard = ({ title, value, bgColor }) => {
  return (
    <div
      className={`${bgColor} text-white p-4 rounded-xl shadow hover:shadow-lg transition`}
    >
      <p className="text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default OverviewCard;
