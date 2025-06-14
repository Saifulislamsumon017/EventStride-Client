import React, { Suspense } from 'react';
import MyRegistrationsList from './MyRegistrationsList';
import { Helmet } from 'react-helmet';
import Loading from '@/components/AllComponents/Loading';
import AuthUser from '@/Hoocks/AuthUser';
import { myRegistration } from '@/All API/myRegistrationApi';

const MyRegistrations = () => {
  const { user } = AuthUser();

  return (
    <div>
      <Helmet>
        <title>Dashboard | MyRegistrations</title>
      </Helmet>
      <Suspense fallback={<Loading />}>
        <MyRegistrationsList myRegistration={myRegistration(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyRegistrations;
