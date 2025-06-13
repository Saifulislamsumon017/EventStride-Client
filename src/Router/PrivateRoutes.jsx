import Loading from '@/components/AllComponents/Loading';
import AuthUser from '@/Hoocks/AuthUser';
import React from 'react';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = AuthUser();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/logIn" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
