import Lottie from 'lottie-react';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router';

import Login from '../assets/Lottie Files/LogIn Lottie.json';
import SocialLogin from '@/components/AllComponents/SocialLogin';
import AuthUser from '@/Hoocks/AuthUser';
import { toast } from 'sonner';

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser } = AuthUser();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';

  const handelSignIn = e => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);

        const displayName =
          user.displayName || user.email?.split('@')[0] || 'User';
        const firstName = displayName.split(' ')[0];

        toast.success(`Welcome back, ${firstName}!`);
        navigate(from);
        // form.reset();
      })
      .catch(error => {
        console.error(error);
        toast.error('Failed to sign in. Please check your credentials.');
      });
  };
  return (
    <div className=" max-w-11/12 mx-auto flex h-screen gap-5  justify-center items-center">
      <div>
        <Lottie
          className="w-[600px] h-full"
          animationData={Login}
          loop={true}
        />
      </div>
      <div className=" w-1/4 flex justify-center items-center  px-4 md:px-0 ">
        <Card className="w-full mx-auto shadow rounded-2xl dark:bg-gray-800 dark:border-gray-600">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center text-2xl">LogIn Into Your Account</h1>
              <p className="text-center font-light font-rancho mt-2 dark:text-gray-300 ">
                Enter Your Details Below To LogIn Your Account
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handelSignIn} className="space-y-4">
              <div>
                <Label className="block w-full mb-2 pl-2">E-mail</Label>
                <input
                  className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                  type="email"
                  name="email"
                  placeholder="Enter Your E-mail Address"
                />
              </div>
              <div className="relative">
                <Label className="block w-full mb-2 pl-2">Password</Label>
                <input
                  className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter Your Password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                  className="absolute right-2 top-8 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <Button
                className="w-full cursor-pointer text-[18px]"
                type="submit"
              >
                LogIn
              </Button>
            </form>
            <SocialLogin />

            <p className="text-center font-light font-abel pt-2 dark:text-gray-300 ">
              Don't Have An Account?
              <Link to="/signup">
                <span className="cursor-pointer underline text-indigo-700">
                  SignUp
                </span>
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LogIn;
