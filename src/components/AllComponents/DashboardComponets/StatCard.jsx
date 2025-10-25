import React from 'react';

const StatCard = ({ icon, title, value }) => {
  return (
    <div className=" rounded-2xl shadow p-6 flex items-center gap-4 border hover:shadow-md transition duration-300 ease-in-out">
      <div className="p-3 rounded-full">{icon}</div>
      <div>
        <h3 className="text-sm ">{title}</h3>
        <p className="text-2xl font-bold ">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
