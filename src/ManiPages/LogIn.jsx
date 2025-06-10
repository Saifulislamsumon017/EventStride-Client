import Lottie from 'lottie-react';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import Login from '../assets/Lottie Files/LogIn Lottie.json';

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className=" max-w-11/12 mx-auto flex h-screen gap-5 md:pt-17 justify-center items-center">
      <div className="hidden md:block">
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
            <form className="space-y-4">
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
            <div class="flex py-3 items-center px-4 text-sm text-gray-800 gap-1 before:flex-1 before:border-t after:flex-1 after:border-t">
              OR
            </div>

            <button
              className="w-full flex gap-1 text-[18px] items-center justify-center shadow-2xl rounded-md py-1.5 border cursor-pointer "
              type="submit"
            >
              <FcGoogle size={22} />
              LogIn With Google
            </button>

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
