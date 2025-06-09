import Footer from '@/components/AllComponents/Footer';
import Header from '@/components/AllComponents/Header';
import React from 'react';
import { Outlet } from 'react-router';

const Dashboard = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Dashboard;
