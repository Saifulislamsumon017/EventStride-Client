// import { marathonsLoader } from '@/All API/marathonsApi';
import HeroBanner from '@/components/AllComponents/HeroBanner';
import UpcomingMarathon from '@/components/AllComponents/UpcomingMarathon';
// import Loading from '@/components/AllComponents/Loading';
// import MarathonSection from '@/components/AllComponents/MarathonSection';

import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className="w-11/12 mx-auto py-20">
      <Helmet>
        <title>Home | EventStride</title>
      </Helmet>
      <HeroBanner />
      {/* <Suspense fallback={<Loading />}>
        <MarathonSection marathonsLoader={marathonsLoader} />
      </Suspense> */}
      <UpcomingMarathon />
    </div>
  );
};

export default Home;
