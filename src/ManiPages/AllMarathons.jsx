import SingleCard from '@/Marathons/SingleCard';
import React from 'react';
import { Helmet } from 'react-helmet';

import { useLoaderData, useLocation, useNavigate } from 'react-router';

const AllMarathons = () => {
  const marathonsData = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();

  const urlParams = new URLSearchParams(location.search);
  const sort = urlParams.get('sort') || 'desc';
  const limit = urlParams.get('limit') || '9';

  const marathons = Array.isArray(marathonsData)
    ? marathonsData
    : marathonsData?.marathons || [];

  const handleSortChange = e => {
    urlParams.set('sort', e.target.value);
    navigate(`/marathons?${urlParams.toString()}`);
  };

  const handleLimitChange = e => {
    urlParams.set('limit', e.target.value);
    navigate(`/marathons?${urlParams.toString()}`);
  };

  return (
    <div className="w-11/12 max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>All Marathons | EventStride</title>
      </Helmet>

      <h1 className="text-4xl mb-6 text-center">All Marathons</h1>

      <div className="flex flex-col sm:flex-row justify-end mb-4 gap-4">
        <select
          className="border px-3 py-2 rounded text-sm sm:text-base"
          value={sort}
          onChange={handleSortChange}
        >
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>

        <select
          className="border px-3 py-2 rounded text-sm sm:text-base"
          value={limit}
          onChange={handleLimitChange}
        >
          <option value="3">Show 3</option>
          <option value="6">Show 6</option>
          <option value="9">Show 9</option>
          <option value="12">Show 12</option>
          <option value="100">Show All</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {marathons.map(marathon => (
          <SingleCard key={marathon._id} marathon={marathon} />
        ))}
      </div>
    </div>
  );
};

export default AllMarathons;
