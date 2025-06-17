import React, { useEffect, useState } from 'react';

import Logo from '../../assets/marathon.png';
import { Button } from '../ui/button';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import AuthUser from '@/Hoocks/AuthUser';
import { Avatar, AvatarImage } from '../ui/avatar';
import { toast } from 'sonner';
import { Link, NavLink, useNavigate } from 'react-router';
import { MdAddTask } from 'react-icons/md';
import { MdAppRegistration } from 'react-icons/md';
import { MdOutlineEventAvailable } from 'react-icons/md';

const Header = () => {
  const { user, signOutUser } = AuthUser();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Sync theme on mount
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success('Successfully signed out!');
        navigate('/login');
      })
      .catch(error => {
        console.error(error);
        toast.error('Failed to sign out. Please try again.');
      });
  };

  return (
    <header className="py-3 w-full dark:bg-gray-800 dark:border-b-gray-600 border-b-gray-300 border-2 bg-white z-50">
      <title>Header | Event Stried</title>
      <div className="w-11/12 mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Logo section */}
        <Link to="/" className="flex gap-2 items-center">
          <img src={Logo} className="w-10 h-10" alt="EventStried Logo" />
          <h1 className="font-rancho text-3xl font-bold uppercase">
            Event<span className="text-[#c0122d]">Stried</span>
          </h1>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center text-xl font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-[#c0122d]' : '')}
          >
            Home
          </NavLink>
          <NavLink
            to="/marathons"
            className={({ isActive }) => (isActive ? 'text-[#c0122d]' : '')}
          >
            Marathons
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? 'text-[#c0122d]' : '')}
          >
            Dashboard
          </NavLink>
        </nav>

        {/* Theme + User/Auth */}
        <div className="flex items-center gap-3">
          <Button onClick={toggleTheme}>
            {isDark ? <FaSun /> : <FaMoon />}
          </Button>

          {user ? (
            <div className="flex items-center gap-2">
              <Avatar title={user.displayName || 'User'}>
                <AvatarImage
                  src={user.photoURL || 'https://github.com/shadcn.png'}
                  alt={user.displayName || 'User'}
                />
              </Avatar>
              <Button onClick={handleSignOut} className="cursor-pointer">
                LogOut
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex gap-2">
              <Link to="/login">
                <Button className="cursor-pointer">LogIn</Button>
              </Link>
              <Link to="/signup">
                <Button className="cursor-pointer">SignUp</Button>
              </Link>
            </div>
          )}

          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-6 pb-4">
          <nav className="flex flex-col gap-3 text-lg font-medium">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/marathons" onClick={() => setIsMenuOpen(false)}>
              Marathons
            </NavLink>

            {/* Dashboard + Submenu (only if logged in) */}
            {user && (
              <div className="flex flex-col gap-1">
                <NavLink to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                  Dashboard
                </NavLink>
                <div className="ml-4 flex flex-col gap-1 text-base text-gray-700 dark:text-gray-300">
                  <NavLink
                    to={'dashboard/addmarathon'}
                    className="hover:text-[#c0122d] flex items-center"
                  >
                    <MdAddTask />
                    Add Marathon
                  </NavLink>
                  <NavLink
                    to={'dashboard/my-marathon'}
                    className="hover:text-[#c0122d] flex items-center"
                  >
                    <MdOutlineEventAvailable />
                    My Marathons
                  </NavLink>
                  <NavLink
                    to={'dashboard/myRegistration'}
                    className="hover:text-[#c0122d] flex items-center"
                  >
                    <MdAppRegistration />
                    My Registration
                  </NavLink>
                </div>
              </div>
            )}

            {/* Logout Button if user logged in */}
            {user && (
              <Button
                className="mt-3"
                onClick={() => {
                  handleSignOut();
                  setIsMenuOpen(false);
                }}
              >
                LogOut
              </Button>
            )}

            {/* Show login/signup if not logged in */}
            {!user && (
              <div className="flex flex-col gap-2 mt-2">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">LogIn</Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">SignUp</Button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
