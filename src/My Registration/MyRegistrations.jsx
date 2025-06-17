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
      const data = await myRegistration(user.email, search);
      setRegistrations(data);
      setLoading(false);
    };

    if (user?.email) {
      fetchData();
    }
  }, [user.email, search]);

  return (
    <div className="min-h-screen pt-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 md:ml-[320px]">
      <title>Dashboard | MyRegistrations</title>

      {/* Search Input - Responsive */}
      <div className="flex justify-center items-center mb-10">
        <input
          type="text"
          placeholder="Search by title..."
          className="w-full max-w-md sm:max-w-xl px-4 py-2 rounded border dark:border-gray-600 dark:bg-gray-900 font-abel text-sm transition focus:ring-2 focus:ring-green-500 outline-none"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Loading or Registrations List */}
      {loading ? (
        <Loading />
      ) : registrations.length > 0 ? (
        <MyRegistrationsList
          registrations={registrations}
          setRegistrations={setRegistrations}
        />
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No registrations found.
        </p>
      )}
    </div>
  );
};

export default MyRegistrations;
