import React from 'react';
import { Link } from 'react-router';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import Logo from '../../assets/marathon.png';

const SidebarFooter = () => {
  return (
    <footer className="hidden sm:hidden mt-20 md:block ml-[300px] bg-gradient-to-t from-gray-100 via-white to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-300 dark:border-gray-700">
      <div className="w-11/12 mx-auto py-10 grid gap-10 grid-cols-1 lg:grid-cols-4 text-sm text-gray-700 dark:text-gray-300">
        {/* Brand Info */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="EventStride Logo" className="w-10 h-10" />
            <h2 className="text-2xl font-bold font-rancho text-gray-900 dark:text-white">
              Event<span className="text-[#c0122d]">Stried</span>
            </h2>
          </Link>
          <p className="text-sm leading-relaxed">
            Where passion meets the pavement. Explore, register, and run
            marathons across the globe with ease.
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-[#c0122d]" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#c0122d]" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#c0122d]" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#c0122d]" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-[#c0122d]" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Explore
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#c0122d]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/marathons" className="hover:text-[#c0122d]">
                Marathons
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-[#c0122d]">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#c0122d]">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Support
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/faq" className="hover:text-[#c0122d]">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#c0122d]">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-[#c0122d]">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Legal
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/terms" className="hover:text-[#c0122d]">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-[#c0122d]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/cookie" className="hover:text-[#c0122d]">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 py-4 text-center text-xs text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} EventStride. All rights reserved.
      </div>
    </footer>
  );
};

export default SidebarFooter;
