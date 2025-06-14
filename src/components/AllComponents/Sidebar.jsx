import React from 'react';
import { NavLink } from 'react-router';
import { MdAddTask } from 'react-icons/md';
import { MdAppRegistration } from 'react-icons/md';
import { MdOutlineEventAvailable } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="hidden fixed md:block dark:bg-gray-800 bg-white border-gray-300d dark:border-gray-600 w-[300px] p-10 h-screen space-y-2 z-10">
      <div className="text-center px-3 pt-10 space-y-2">
        <NavLink
          to={'dashboard/addmarathon'}
          className={({ isActive }) =>
            `text-xl flex items-center gap-1 font-bold cursor-pointer p-2 rounded-2xl w-full ${
              isActive
                ? 'bg-gray-800 dark:bg-gray-900 text-gray-200'
                : 'bg-transparent'
            }`
          }
        >
          <MdAddTask />
          Add Marathon
        </NavLink>
        <NavLink
          to={'dashboard/my-marathon'}
          className={({ isActive }) =>
            `text-xl flex items-center gap-1 font-bold cursor-pointer p-2 rounded-2xl w-full ${
              isActive
                ? 'bg-gray-800 dark:bg-gray-900 text-gray-200'
                : 'bg-transparent'
            }`
          }
        >
          <MdOutlineEventAvailable />
          My Marathons
        </NavLink>
        <NavLink
          to={'dashboard/myRegistration'}
          className={({ isActive }) =>
            `text-xl flex items-center gap-1 font-bold cursor-pointer p-2 rounded-2xl w-full ${
              isActive
                ? 'bg-gray-800 dark:bg-gray-900 text-gray-200'
                : 'bg-transparent'
            }`
          }
        >
          <MdAppRegistration />
          My Registration
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
