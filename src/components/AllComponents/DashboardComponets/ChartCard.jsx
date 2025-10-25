import React from 'react';

const ChartCard = ({ title, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition-all duration-300">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">{title}</h2>
      {children}
    </div>
  );
};

export default ChartCard;
