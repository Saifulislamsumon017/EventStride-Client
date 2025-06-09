import MyDashboard from '@/DashboardPages/MyDashboard';
import Dashboard from '@/Layout/Dashboard';
import MainLayout from '@/Layout/MainLayout';
import Home from '@/ManiPages/Home';
import LogIn from '@/ManiPages/LogIn';
import SignUp from '@/ManiPages/SignUp';

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
      {
        path: '/login',
        Component: LogIn,
      },
      {
        path: '/signup',
        Component: SignUp,
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
