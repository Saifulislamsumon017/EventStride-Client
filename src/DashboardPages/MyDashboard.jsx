import React from 'react';
import { Helmet } from 'react-helmet';

const MyDashboard = () => {
  return (
    <div className="w-11/12 mx-auto flex">
      <Helmet>
        <title> Dashboard | MyDashboard </title>
      </Helmet>
    </div>
  );
};

export default MyDashboard;
