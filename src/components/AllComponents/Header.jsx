import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../assets/marathon.png';
import { Button } from '../ui/button';
import { FaMoon } from 'react-icons/fa';
import AuthUser from '@/Hoocks/AuthUser';
import { Avatar, AvatarImage } from '../ui/avatar';
import { toast } from 'sonner';

const Header = () => {
  const { user, signOutUser } = AuthUser();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log('signed out user');
        toast.success('Successfully signed out!');
      })
      .catch(error => {
        console.log(error);
        toast.error('Failed to sign out. Please try again.');
      });
  };
  return (
    <div className=" py-3 fixed w-full dark:bg-gray-800 dark:border-b-gray-600 border-b-gray-300 border-2 bg-white z-50">
      <div className="max-w-11/12 mx-auto flex justify-between items-center px-4 md:px-0">
        {/* { Logo section } */}
        <div>
          <Link to="/" className="flex gap-1 items-center">
            <img src={Logo} className="w-10 h-10" alt="" />
            <h1 className="font-rancho text-3xl font-bold uppercase">
              Event<span className="text-[#c0122d]">Stried</span>
            </h1>
          </Link>
        </div>
        {/* {nav section } */}
        <nav>
          <ul className="hidden md:flex gap-3 items-center text-xl font-semibold">
            <NavLink
              to={'/'}
              className={({ isActive }) => (isActive ? '' : '')}
            >
              <li>Home</li>
            </NavLink>
            <NavLink to={'/all'}>
              <li>All</li>
            </NavLink>
            <NavLink to={'/dashboard'}>
              <li>Dashboard</li>
            </NavLink>
          </ul>
        </nav>
        <div className="flex gap-2 items-center">
          <Button>
            <FaMoon />
          </Button>
          {user ? (
            <div className="flex gap-2">
              <Avatar>
                <AvatarImage
                  src={user.photoURL || 'https://github.com/shadcn.png'}
                  alt={user.displayName || 'User'}
                />
              </Avatar>
              <Link to={'/login'}>
                <Button onClick={handleSignOut} className="cursor-pointer">
                  LogOut
                </Button>
              </Link>
            </div>
          ) : (
            <div className=" md:flex gap-2">
              <Link to={'/login'}>
                <Button className="cursor-pointer">LogIn</Button>
              </Link>
              <Link to={'/signup'}>
                <Button className="hidden md:block cursor-pointer">
                  SignUp
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
