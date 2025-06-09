import { AuthContext } from '@/Context/AuthContext';
import React, { use } from 'react';

const AuthUser = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};

export default AuthUser;
