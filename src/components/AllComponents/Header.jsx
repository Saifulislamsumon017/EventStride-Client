import React, { useState } from 'react';

import Logo from '../../assets/marathon.png';
import { Button } from '../ui/button';
import { FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import AuthUser from '@/Hoocks/AuthUser';
import { Avatar, AvatarImage } from '../ui/avatar';
import { toast } from 'sonner';
import { Link, NavLink, useNavigate } from 'react-router';

const Header = () => {
  const { user, signOutUser } = AuthUser();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          {user && (
            <>
              <NavLink
                to="/dashboard/myRegistration"
                className={({ isActive }) => (isActive ? 'text-[#c0122d]' : '')}
              >
                My Registrations
              </NavLink>
            </>
          )}
        </nav>

        {/* Theme + User/Auth */}
        <div className="flex items-center gap-3">
          <Button>
            <FaMoon />
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
            <NavLink to="/dashboard" onClick={() => setIsMenuOpen(false)}>
              Dashboard
            </NavLink>
            {/* {user ? ( */}
            <Button
              onClick={() => {
                handleSignOut();
                setIsMenuOpen(false);
              }}
            >
              LogOut
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
