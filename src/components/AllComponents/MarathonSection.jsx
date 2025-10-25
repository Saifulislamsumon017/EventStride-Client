import React, { useEffect, useState } from 'react';
import AuthUser from '@/Hoocks/AuthUser';
import Loading from './Loading';
import SingleCard from '@/Marathons/SingleCard';

const MarathonSection = () => {
  const [marathons, setMarathons] = useState([]);
  const { loading, setLoading } = AuthUser();

  useEffect(() => {
    // Fetch only non-upcoming marathons
    fetch(
      'https://event-stride-server.vercel.app/marathons?upcoming=false&sort=desc&limit=8'
    )
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        setMarathons(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching marathons:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="pt-20">
      <h2 className="text-4xl text-center pb-4">Chase Your Next Finish Line</h2>
      <p className="w-2/5 mx-auto text-center pb-8">
        Fuel your passion for running. Sign up for marathons happening near you
        and take the next stride toward greatness.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {marathons.map(marathon => (
          <SingleCard key={marathon._id} marathon={marathon} />
        ))}
      </div>
    </div>
  );
};

export default MarathonSection;
