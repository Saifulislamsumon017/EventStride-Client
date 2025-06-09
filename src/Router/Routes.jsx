import Dashboard from '@/Layout/Dashboard';
import MainLayout from '@/Layout/MainLayout';
import Home from '@/Pages/Home';
import { Children, Component } from 'react';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    // Children: [
    //   {
    //     index: true,
    //     Component: Home,
    //   },
    // ],
  },
  {
    path: '/dashboard',
    Component: Dashboard,
  },
]);
