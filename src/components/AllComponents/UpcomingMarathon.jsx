import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import UpcomingCard from '@/Marathons/UpcomingCard';

const UpcomingMarathon = () => {
  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch upcoming marathons
    fetch('https://event-stride-server.vercel.app/upcoming-marathons')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        setMarathons(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch marathons:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-80">
        <Loader2 className="animate-spin w-10 h-10 text-gray-500" />
      </div>
    );
  }

  return (
    <div className="pt-20">
      <h2 className="text-4xl text-center pb-4">Upcoming Marathons</h2>
      <p className="w-full sm:w-3/5 lg:w-2/5 mx-auto text-center text-gray-600 dark:text-gray-300 pb-10">
        Check out marathons happening soon and plan your participation.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
        {marathons.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No upcoming marathons found.
          </p>
        ) : (
          marathons.map((marathon, index) => (
            <UpcomingCard key={index} marathon={marathon} />
          ))
        )}
      </div>
    </div>
  );
};

export default UpcomingMarathon;
