import React from 'react';

import Logo from '../../assets/marathon.png';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-100 via-white to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-300 dark:border-gray-700">
      <div className="w-11/12 mx-auto py-12 flex flex-col md:flex-row text-sm text-gray-700 dark:text-gray-300">
        {/* Brand Info - takes 50% width */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="EventStride Logo" className="w-10 h-10" />
            <h2 className="font-rancho text-3xl font-bold uppercase tracking-wide text-gray-900 dark:text-white">
              Event
              <span className="text-[#c0122d] dark:text-yellow-300">
                Stride
              </span>
            </h2>
          </Link>
          <p className=" w-1/2 leading-relaxed">
            Where passion meets the pavement. Explore, register, and run
            marathons across the globe with ease.
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-[#c0122d]">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#c0122d]">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#c0122d]">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#c0122d]">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-[#c0122d]">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Links grouped - takes remaining 50% width */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between gap-10">
          {/* Explore Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
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

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
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

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
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
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-300 dark:border-gray-700 py-4 text-center text-xs text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} EventStride. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
