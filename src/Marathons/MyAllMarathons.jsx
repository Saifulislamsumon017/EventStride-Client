import React, { Suspense } from 'react';
import MyMarathonList from './MyMarathonList';

import AuthUser from '@/Hoocks/AuthUser';

import Loading from '@/components/AllComponents/Loading';
import { myMarathonsLoader } from '@/All API/myMarathons.Api';

const MyAllMarathons = () => {
  const { user } = AuthUser();
  return (
    <div>
      <title>Dashboard | My Marathons</title>

      <Suspense fallback={<Loading />}>
        <MyMarathonList myMarathonsLoader={myMarathonsLoader(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyAllMarathons;
