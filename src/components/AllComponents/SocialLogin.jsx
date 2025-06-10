import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useLocation } from 'react-router';

const SocialLogin = () => {
  const location = useLocation();
  const isSignUp = location.pathname === '/signup';
  return (
    <div>
      <div className="flex py-4 items-center px-4 text-sm text-gray-800 gap-1 before:flex-1 before:border-t after:flex-1 after:border-t">
        OR
      </div>

      <button
        className="w-full flex gap-1 text-[18px] items-center justify-center shadow-2xl rounded-md py-1.5 border cursor-pointer "
        type="submit"
      >
        <FcGoogle size={22} />
        {isSignUp ? 'SignUp With Google' : 'LogIn With Google'}
      </button>
    </div>
  );
};

export default SocialLogin;
