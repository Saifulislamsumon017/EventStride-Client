import Lottie from 'lottie-react';
import React, { useState } from 'react';
import signUp from '../assets/Lottie Files/SignUp Lottie.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import AuthUser from '@/Hoocks/AuthUser';
import { toast } from 'sonner';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = AuthUser();

  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      toast.error('Email and password are required');
      return;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long.');
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error('Password must include at least one uppercase letter.');
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error('Password must include at least one lowercase letter.');
      return;
    }

    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(password)) {
      toast.error('Password must include at least one special character.');
      return;
    }

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        toast.success('Account created successfully!');
        form.reset();
      })
      .catch(error => {
        console.error(error);
        toast.error(error.message || 'Sign up failed');
      });
  };

  return (
    <div className=" max-w-11/12 mx-auto flex h-screen gap-5 md:pt-17 justify-center items-center">
      <div className="hidden md:block">
        <Lottie
          className="w-[600px] h-full"
          animationData={signUp}
          loop={true}
        />
      </div>
      <div className="flex justify-center items-center  px-4 md:px-0 ">
        <Card className="w-full mx-auto shadow rounded-2xl dark:bg-gray-800 dark:border-gray-600">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center text-2xl">Create An Account</h1>
              <p className="text-center font-light font-rancho mt-2 dark:text-gray-300 ">
                Enter Your Details Below To Create Your Account
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="flex gap-3">
                <div className="w-1/2">
                  <Label className="block w-full mb-2 pl-2">First Name</Label>
                  <input
                    className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                    type="text"
                    name="FirstName"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-1/2">
                  <Label className="block w-full mb-2 pl-2">Last Name</Label>
                  <input
                    className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                    type="text"
                    name="LastName"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div>
                <Label className="block w-full mb-2 pl-2">E-mail</Label>
                <input
                  className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                  type="email"
                  name="email"
                  placeholder="Safwan@example.com"
                />
              </div>
              <div className="relative">
                <Label className="block w-full mb-2 pl-2">Password</Label>
                <input
                  className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Create A Password"
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
                SignUp
              </Button>
            </form>
            <div className="flex py-4 items-center px-4 text-sm text-gray-800 gap-1 before:flex-1 before:border-t after:flex-1 after:border-t">
              OR
            </div>

            <button
              className="w-full flex gap-1 text-[18px] items-center justify-center shadow-2xl rounded-md py-1.5 border cursor-pointer "
              type="submit"
            >
              <FcGoogle size={22} />
              SignUp With Google
            </button>

            <p className="text-center font-light font-abel pt-2 dark:text-gray-300 ">
              Already Have An Account?
              <Link to="/login">
                <span className="cursor-pointer underline text-indigo-700">
                  LogIn
                </span>
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
