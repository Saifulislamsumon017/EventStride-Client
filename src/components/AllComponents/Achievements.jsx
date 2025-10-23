import React from 'react';

const Achievements = ({ stats = [] }) => {
  // Default static data if none is passed
  const defaultStats = [
    { title: 'Marathons Organized', value: 120 },
    { title: 'Runners Participated', value: 3500 },
    { title: 'Countries Covered', value: 25 },
    { title: 'Charity Raised ($)', value: 50000 },
  ];

  const displayStats = stats.length > 0 ? stats : defaultStats;

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white">
          Our Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {displayStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center"
            >
              <p className="text-indigo-600 text-3xl font-bold mb-2">
                {stat.value.toLocaleString()}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
