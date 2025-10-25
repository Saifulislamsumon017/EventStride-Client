import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Users, Building, CalendarDays, Trophy } from 'lucide-react';
import StatCard from '@/components/AllComponents/DashboardComponets/StatCard';
import ChartsSection from '@/components/AllComponents/DashboardComponets/ChartsSection';

const DashboardHome = () => {
  const {
    data: marathons = [],
    isLoading: loadingMarathons,
    error: errorMarathons,
  } = useQuery({
    queryKey: ['marathons'],
    queryFn: async () => {
      const res = await axios.get(
        'https://event-stride-server.vercel.app/marathons'
      );
      return res.data;
    },
  });

  const {
    data: organizers = [],
    isLoading: loadingOrganizers,
    error: errorOrganizers,
  } = useQuery({
    queryKey: ['organizers'],
    queryFn: async () => {
      const res = await axios.get(
        'https://event-stride-server.vercel.app/organizers'
      );
      return res.data;
    },
  });

  const {
    data: registrations = [],
    isLoading: loadingRegistrations,
    error: errorRegistrations,
  } = useQuery({
    queryKey: ['registrations'],
    queryFn: async () => {
      const res = await axios.get(
        'https://event-stride-server.vercel.app/registration'
      );
      return res.data;
    },
  });

  if (loadingMarathons || loadingOrganizers || loadingRegistrations) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg font-semibold text-gray-600 dark:text-gray-300">
        Loading Dashboard...
      </div>
    );
  }

  if (errorMarathons || errorOrganizers || errorRegistrations) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600 dark:text-red-400 text-lg font-semibold">
        Failed to load data. Please try again later.
      </div>
    );
  }

  const totalMarathons = marathons.length;
  const totalRegistrations = registrations.length;
  const totalCompanies = organizers.length;
  const upcomingMarathons = marathons.filter(m => m.upcoming).length;

  return (
    <div className="min-h-screen pt-30 px-4 md:px-6 lg:px-8 ml-0 md:ml-[320px] space-y-8  transition-colors duration-300">
      {/* ==== Stats Row ==== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<Trophy className="w-8 h-8 text-blue-500 dark:text-blue-400" />}
          title="Total Marathons"
          value={totalMarathons}
        />
        <StatCard
          icon={
            <Users className="w-8 h-8 text-green-500 dark:text-green-400" />
          }
          title="Total Registrations"
          value={totalRegistrations}
        />
        <StatCard
          icon={
            <Building className="w-8 h-8 text-purple-500 dark:text-purple-400" />
          }
          title="Total Companies"
          value={totalCompanies}
        />
        <StatCard
          icon={
            <CalendarDays className="w-8 h-8 text-orange-500 dark:text-orange-400" />
          }
          title="Upcoming Marathons"
          value={upcomingMarathons}
        />
      </div>

      {/* ==== Charts ==== */}
      <ChartsSection
        marathons={marathons}
        registrations={registrations}
        organizers={organizers}
      />
    </div>
  );
};

export default DashboardHome;
