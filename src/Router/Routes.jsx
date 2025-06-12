import MyDashboard from '@/DashboardPages/MyDashboard';
import Dashboard from '@/Layout/Dashboard';
import MainLayout from '@/Layout/MainLayout';
import AllMarathons from '@/ManiPages/AllMarathons';
import Home from '@/ManiPages/Home';
import LogIn from '@/ManiPages/LogIn';
import SignUp from '@/ManiPages/SignUp';
import MarathonDetails from '@/Marathons/MarathonDetails';

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
        path: 'marathons',
        Component: AllMarathons,
        loader: () =>
          fetch('http://localhost:3000/marathons?sort=desc&limit=100'),
      },
      {
        path: '/marathons/:id',
        Component: MarathonDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/marathons/${params.id}`),
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
