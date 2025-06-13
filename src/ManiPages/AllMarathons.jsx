import SingleCard from '@/Marathons/SingleCard';
import React from 'react';
import { useLoaderData } from 'react-router';

const AllMarathons = () => {
  const marathons = useLoaderData();
  // console.log(marathons);

  return (
    <div className="w-11/12 mx-auto py-20">
      <h1 className="text-4xl mb-6 text-center">All Marathons</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {marathons.map(marathon => (
          <SingleCard key={marathon._id} marathon={marathon}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default AllMarathons;
