import React, { Suspense, useState } from 'react';
import MyRegistrationsList from './MyRegistrationsList';
import { Helmet } from 'react-helmet';
import Loading from '@/components/AllComponents/Loading';
import AuthUser from '@/Hoocks/AuthUser';
import { myRegistration } from '@/All API/myRegistrationApi';

const MyRegistrations = () => {
  const { user } = AuthUser();
  const [search, setSearch] = useState('');

  return (
    <div>
      <Helmet>
        <title>Dashboard | MyRegistrations</title>
      </Helmet>

      <div className="flex justify-center items-center pt-20 mb-8">
        <input
          placeholder="Search.....by title"
          className="dark:border-gray-600 dark:bg-gray-900 w-1/2 font-abel border pl-2 py-2 rounded"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <Suspense fallback={<Loading />}>
        <MyRegistrationsList myRegistration={myRegistration(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyRegistrations;
