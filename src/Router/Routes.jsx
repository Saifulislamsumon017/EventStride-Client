import MyDashboard from '@/DashboardPages/MyDashboard';
import Dashboard from '@/Layout/Dashboard';
import MainLayout from '@/Layout/MainLayout';
import Home from '@/ManiPages/Home';

import { Children, Component } from 'react';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: 'dashboard',
    Component: Dashboard,
    children: [
      {
        index: true,
        Component: MyDashboard,
      },
    ],
  },
]);
