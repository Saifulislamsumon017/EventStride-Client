import AuthUser from '@/Hoocks/AuthUser';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import SingleCard from '@/Marathons/SingleCard';

const MarathonSection = () => {
  const [marathons, setMarathons] = useState([]);
  const { loading, setLoading } = AuthUser();

  useEffect(() => {
    // API fetch
    fetch('https://event-stride-server.vercel.app/marathons?sort=desc&limit=6')
      .then(res => res.json())
      .then(data => {
        setMarathons(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching marathons:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="pt-20">
      <h2 className="text-4xl text-center pb-4">Chase Your Next Finish Line</h2>
      <p className=" w-2/5 mx-auto text-center pb-8">
        Fuel your passion for running. Sign up for marathons happening near you
        and take the next stride toward greatness.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {marathons.map(marathon => (
          <SingleCard key={marathon._id} marathon={marathon} />
        ))}
      </div>
    </div>
  );
};

export default MarathonSection;
