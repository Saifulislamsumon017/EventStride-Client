import React, { useEffect, useState } from 'react';
import MyRegistrationsList from './MyRegistrationsList';
import Loading from '@/components/AllComponents/Loading';
import AuthUser from '@/Hoocks/AuthUser';
import { myRegistration } from '@/All API/myRegistrationApi';

const MyRegistrations = () => {
  const { user } = AuthUser();
  const [search, setSearch] = useState('');
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await myRegistration(user.email, search);
        setRegistrations(data);
      } catch (error) {
        console.error('Failed to fetch registrations:', error);
        setRegistrations([]);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [user.email, search]);

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-8 lg:px-12 md:ml-[320px] transition-colors duration-300">
      <title>Dashboard | My Registrations</title>

      {/* Search Section */}
      <div className="max-w-3xl mx-auto mb-12">
        <input
          type="text"
          placeholder="Search registrations by marathon title..."
          className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 font-abel text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
          value={search}
          onChange={e => setSearch(e.target.value)}
          aria-label="Search registrations"
        />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto">
        {loading ? (
          <Loading />
        ) : registrations.length > 0 ? (
          <MyRegistrationsList
            registrations={registrations}
            setRegistrations={setRegistrations}
          />
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
            No registrations found.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyRegistrations;
