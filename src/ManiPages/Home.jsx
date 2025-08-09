import Blog from '@/components/AllComponents/Blog';
import HeroBanner from '@/components/AllComponents/HeroBanner';

import MarathonSection from '@/components/AllComponents/MarathonSection';
import MetOurTeam from '@/components/AllComponents/MetOurTeam';
import UpcomingMarathon from '@/components/AllComponents/UpcomingMarathon';

import React, { Suspense } from 'react';

const Home = () => {
  return (
    <div className="w-11/12  mx-auto py-20 px-4 sm:px-6">
      <title>Home | EventStride</title>

      <HeroBanner />

      <MarathonSection />
      <MetOurTeam />

      <UpcomingMarathon />
      <Blog />
    </div>
  );
};

export default Home;
