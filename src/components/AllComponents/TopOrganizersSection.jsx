import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopOrganizersSection = () => {
  const [organizers, setOrganizers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://event-stride-server.vercel.app/organizers')
      .then(res => {
        setOrganizers(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch organizers:', err);
        setError('Failed to load top organizers.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="text-center dark:text-white mt-10 animate-pulse">
        Loading organizers...
      </p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (
    <div className="py-20">
      <h1 className="text-center text-4xl pb-12">Top Marathon Organizers</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {organizers.map((org, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-4 shadow hover:shadow-md transition duration-300 text-center ease-in-out"
          >
            <img
              src={org.logo}
              alt={org.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-2 border-primary dark:border-secondary"
            />
            <h3 className="text-xl font-semibold dark:text-white">
              {org.name}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              {org.location}
            </p>
            <p className="mt-2 text-sm font-medium dark:text-white">
              {org.totalMarathons} Marathon{org.totalMarathons > 1 ? 's' : ''}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopOrganizersSection;
