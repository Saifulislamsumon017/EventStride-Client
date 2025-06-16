import Footer from '@/components/AllComponents/Footer';
import Header from '@/components/AllComponents/Header';
import Sidebar from '@/components/AllComponents/Sidebar';
import React from 'react';
import { Outlet } from 'react-router';
import { Toaster } from 'sonner';

const Dashboard = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="min-h-screen flex">
        <Sidebar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Toaster position="top-right" duration={4000} />
      </main>
      <footer className="z-50">
        <Footer />
      </footer>
    </>
  );
};

export default Dashboard;
