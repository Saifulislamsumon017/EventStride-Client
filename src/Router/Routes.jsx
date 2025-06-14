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
import PrivateRoutes from './PrivateRoutes';
import MarathonRegister from '@/Marathons/MarathonRegister';

import { marathonsLoader } from '@/All API/marathonsApi';
import MyRegistrations from '@/My Registration/MyRegistrations';
import AddMarathon from '@/Marathons/AddMarathon';

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
        path: '/marathons',
        Component: AllMarathons,
        loader: marathonsLoader,
      },

      {
        path: '/marathons/:id',
        Component: MarathonDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/marathons/${params.id}`),
      },
      {
        path: '/marathonRegister/:id',
        element: (
          <PrivateRoutes>
            <MarathonRegister />
          </PrivateRoutes>
        ),
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
      {
        path: 'addmarathon',
        Component: AddMarathon,
      },

      {
        path: '/dashboard/myRegistration',
        element: (
          <PrivateRoutes>
            <MyRegistrations />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
