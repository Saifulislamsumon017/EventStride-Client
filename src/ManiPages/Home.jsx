import Achievements from '@/components/AllComponents/Achievements';
import Blog from '@/components/AllComponents/Blog';
import HeroBanner from '@/components/AllComponents/HeroBanner';
import HowToJoin from '@/components/AllComponents/HowToJoin';

import MarathonSection from '@/components/AllComponents/MarathonSection';
import MetOurTeam from '@/components/AllComponents/MetOurTeam';
import TopOrganizersSection from '@/components/AllComponents/TopOrganizersSection';
import UpcomingMarathon from '@/components/AllComponents/UpcomingMarathon';
import StatsSection from '@/components/StatsSection';

import React, { Suspense } from 'react';

const Home = () => {
  return (
    <div className="w-11/12  mx-auto py-20 px-4 sm:px-6">
      <title>Home | EventStride</title>

      <HeroBanner />

      <MarathonSection />
      <MetOurTeam />

      <UpcomingMarathon />
      <TopOrganizersSection />

      <HowToJoin />
      <StatsSection />
      {/* <Achievements /> */}
      <Blog />
    </div>
  );
};

export default Home;
