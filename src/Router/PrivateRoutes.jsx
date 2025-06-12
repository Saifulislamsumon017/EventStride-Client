import AuthUser from '@/Hoocks/AuthUser';
import React from 'react';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = AuthUser();
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-ring loading-xl"></span>;
  }

  if (!user) {
    return <Navigate to="/logIn" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
