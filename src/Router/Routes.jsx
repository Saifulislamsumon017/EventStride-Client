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
import MyMarathonList from '@/Marathons/MyMarathonList';
import MyAllMarathons from '@/Marathons/MyAllMarathons';
import ErrorPage from '@/ManiPages/ErrorPage';
import Contact from '@/ManiPages/Contact/Contact';
import About from '@/ManiPages/About/About';
import FAQs from '@/ManiPages/OthersPage/FAQs';
import HelpCenter from '@/ManiPages/OthersPage/HelpCenter';
import TermsofService from '@/ManiPages/OthersPage/TermsofService';
import PrivacyPolicy from '@/ManiPages/OthersPage/PrivacyPolicy';
import CookiePolicy from '@/ManiPages/OthersPage/CookiePolicy';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: '/marathons',
        element: <AllMarathons />,

        loader: marathonsLoader,
      },

      {
        path: '/marathons/:id',
        Component: MarathonDetails,
        loader: ({ params }) =>
          fetch(
            `https://event-stride-server.vercel.app/marathons/${params.id}`
          ),
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
        path: '/contact',
        Component: Contact,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/faq',
        Component: FAQs,
      },
      {
        path: '/help',
        Component: HelpCenter,
      },
      {
        path: '/terms',
        Component: TermsofService,
      },
      {
        path: '/privacy',
        Component: PrivacyPolicy,
      },
      {
        path: 'cookie',
        Component: CookiePolicy,
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
        path: 'dashboard/addmarathon',

        element: (
          <PrivateRoutes>
            <AddMarathon />
          </PrivateRoutes>
        ),
      },

      {
        path: 'dashboard/my-marathon',

        element: (
          <PrivateRoutes>
            <MyAllMarathons />
          </PrivateRoutes>
        ),
      },

      {
        path: 'dashboard/myRegistration',
        element: (
          <PrivateRoutes>
            <MyRegistrations />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
