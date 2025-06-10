import Footer from '@/components/AllComponents/Footer';
import Header from '@/components/AllComponents/Header';
import { Toaster } from '@/components/ui/sonner';
import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Toaster position="top-right" duration={4000} />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
