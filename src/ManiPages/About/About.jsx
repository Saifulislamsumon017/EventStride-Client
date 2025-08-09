import React from 'react';
import { Link } from 'react-router';
import MetOurTeam from '@/components/AllComponents/MetOurTeam'; // Adjust the import path if needed
import {
  FaSearch,
  FaLock,
  FaTachometerAlt,
  FaHeadset,
  FaUsers,
  FaRunning,
} from 'react-icons/fa';
import FeatureCard from '@/components/AllComponents/FeatureCard';

const About = () => {
  return (
    <div className="w-11/12  mx-auto py-20 px-4 sm:px-6">
      <title>About | EventStride</title>
      <h1 className="text-4xl my-6 text-center">About EventStride</h1>

      {/* Introduction */}
      <div className="mb-16 max-w-3xl mx-auto text-center px-4">
        <p className="mb-6 text-xl font-light leading-relaxed ">
          EventStride is the premier platform to discover, register, and run
          marathons worldwide. Combining advanced technology with passion, we
          provide an effortless experience for runners of all skill levels.
        </p>
        {/* <p className="text-lg font-light leading-relaxed ">
          Founded by dedicated runners and tech innovators, we strive to create
          a global community where every stride matters.
        </p> */}
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-4xl  text-center font-bold mb-4 text-[#c0122d] dark:text-yellow-300">
            Our Mission
          </h2>
          <p className=" text-center leading-relaxed text-lg">
            To empower runners globally through an intuitive platform connecting
            people to marathons, fostering community, and promoting active
            lifestyles.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-4xl  text-center font-bold mb-4 text-[#c0122d] dark:text-yellow-300">
            Our Vision
          </h2>
          <p className=" text-center leading-relaxed text-lg">
            To be the most trusted marathon platform inspiring millions to run,
            connect, and reach their fitness goals while uplifting communities.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="pt-20">
        <h3 className="text-4xl  text-center sm:text-5xl pb-6">
          Why Choose EventStride?
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <FeatureCard
            Icon={FaSearch}
            title="Personalized Marathon Discovery"
            description="Find marathons tailored to your preferences with smart recommendations."
          />
          <FeatureCard
            Icon={FaLock}
            title="Secure Registration & Payment"
            description="Register and pay quickly with industry-leading security measures."
          />
          <FeatureCard
            Icon={FaTachometerAlt}
            title="Comprehensive Dashboard"
            description="Track your upcoming races, results, and personal progress effortlessly."
          />
          <FeatureCard
            Icon={FaHeadset}
            title="Dedicated Support Team"
            description="Our team is ready to assist you every step of your running journey."
          />
          <FeatureCard
            Icon={FaUsers}
            title="Engaged Running Community"
            description="Connect, motivate, and inspire with fellow runners worldwide."
          />
          <FeatureCard
            Icon={FaRunning}
            title="Expert Tips & Updates"
            description="Stay updated with training advice, nutrition tips, and gear reviews."
          />
        </div>
      </div>

      {/* Team div */}
      <div className="mb-16">
        <MetOurTeam />
      </div>

      {/* Call to Action */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="mb-6 text-lg leading-relaxed">
          Ready to join the journey?{' '}
          <Link
            to="/marathons"
            className="text-[#c0122d] hover:underline font-semibold"
          >
            Explore marathons
          </Link>{' '}
          and take your next step with EventStride.
        </p>
      </div>
    </div>
  );
};

export default About;
