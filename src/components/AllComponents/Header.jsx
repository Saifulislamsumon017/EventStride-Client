import React, { useEffect, useState } from 'react';
import Logo from '../../assets/marathon.png';
import { Button } from '../ui/button';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import AuthUser from '@/Hoocks/AuthUser';
import { Avatar, AvatarImage } from '../ui/avatar';
import { toast } from 'sonner';
import { Link, NavLink, useNavigate } from 'react-router';
import {
  MdAddTask,
  MdAppRegistration,
  MdOutlineEventAvailable,
} from 'react-icons/md';

const Header = () => {
  const { user, signOutUser } = AuthUser();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme handling
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      document.body.classList.add('bg-gray-800', 'text-white');
      document.body.classList.remove('bg-white', 'text-black');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      document.body.classList.add('bg-white', 'text-black');
      document.body.classList.remove('bg-gray-800', 'text-white');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success('Successfully signed out!');
        navigate('/login');
      })
      .catch(() => {
        toast.error('Failed to sign out. Please try again.');
      });
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/marathons', label: 'Marathons' },
    { to: '/about', label: 'About' },
    ...(user
      ? [
          { to: '/dashboard', label: 'Dashboard' },
          { to: '/contact', label: 'Contact' },
        ]
      : []),
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div
        className={`w-full border-b border-gray-300 dark:border-gray-700 rounded-b-xl ${
          isDark
            ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-black'
            : 'bg-white'
        }`}
      >
        <div className="w-11/12 mx-auto px-4 flex justify-between items-center py-3">
          {/* Logo and site title */}
          <Link to="/" className="flex gap-2 items-center">
            <img src={Logo} alt="EventStried Logo" className="w-10 h-10" />
            <h1
              className={`font-rancho text-3xl font-bold uppercase tracking-wide ${
                isDark ? 'text-white' : 'text-black'
              }`}
            >
              Event
              <span className={isDark ? 'text-yellow-300' : 'text-[#c0122d]'}>
                Stried
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex gap-6 items-center text-lg font-semibold ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? isDark
                      ? 'text-yellow-300 underline'
                      : 'text-[#c0122d] underline'
                    : isDark
                    ? 'hover:text-yellow-300'
                    : 'hover:text-[#a50f26]'
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Theme toggle, user avatar & auth buttons, mobile menu toggle */}
          <div className="flex items-center gap-3">
            <Button
              onClick={toggleTheme}
              className={`transition ${
                isDark
                  ? 'bg-white text-black hover:bg-yellow-400'
                  : 'bg-yellow-400 text-black hover:bg-yellow-300'
              }`}
              aria-label="Toggle theme"
            >
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
                <Button
                  onClick={handleSignOut}
                  className="bg-yellow-400 text-black hover:bg-yellow-500"
                >
                  LogOut
                </Button>
              </div>
            ) : (
              <div className="hidden md:flex gap-2">
                <Link to="/login">
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                    LogIn
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                    SignUp
                  </Button>
                </Link>
              </div>
            )}

            <button
              className={
                isDark ? 'md:hidden text-white' : 'md:hidden text-black'
              }
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden px-6 pb-4 ${
              isDark
                ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white'
                : 'bg-gradient-to-r from-[#c0122d] via-[#a50f26] to-[#7d0b1d] text-white'
            }`}
          >
            <nav className="flex flex-col gap-3 text-lg font-medium">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:underline"
                >
                  {label}
                </NavLink>
              ))}

              {user && (
                <>
                  <div className="ml-4 flex flex-col gap-1 text-base">
                    <NavLink
                      to="dashboard/addmarathon"
                      className="flex items-center gap-1 hover:underline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <MdAddTask /> Add Marathon
                    </NavLink>
                    <NavLink
                      to="dashboard/my-marathon"
                      className="flex items-center gap-1 hover:underline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <MdOutlineEventAvailable /> My Marathons
                    </NavLink>
                    <NavLink
                      to="dashboard/myRegistration"
                      className="flex items-center gap-1 hover:underline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <MdAppRegistration /> My Registration
                    </NavLink>
                  </div>
                  <Button
                    className="mt-3 bg-yellow-400 text-black hover:bg-yellow-500"
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                  >
                    LogOut
                  </Button>
                </>
              )}

              {!user && (
                <div className="flex flex-col gap-2 mt-2">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                      LogIn
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                      SignUp
                    </Button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
