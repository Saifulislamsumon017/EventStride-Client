import React from 'react';
import { NavLink } from 'react-router';
import {
  MdAddTask,
  MdAppRegistration,
  MdOutlineEventAvailable,
} from 'react-icons/md';

const Sidebar = () => {
  return (
    <aside className="hidden md:block fixed top-0 left-0 h-screen w-72 p-8 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-md z-20">
      <nav className="flex flex-col space-y-4 mt-16">
        {[
          {
            to: 'dashboard/addmarathon',
            icon: MdAddTask,
            label: 'Add Marathon',
          },
          {
            to: 'dashboard/my-marathon',
            icon: MdOutlineEventAvailable,
            label: 'My Marathons',
          },
          {
            to: 'dashboard/myRegistration',
            icon: MdAppRegistration,
            label: 'My Registration',
          },
        ].map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 text-lg font-semibold px-4 py-3 rounded-lg transition-colors duration-300
              ${
                isActive
                  ? 'bg-[#c0122d] text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`
            }
            end
          >
            <Icon className="text-2xl" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
