import React from 'react';
import {
  FaBookOpen,
  FaLifeRing,
  FaEnvelope,
  FaQuestionCircle,
} from 'react-icons/fa';

const HelpCard = ({ Icon, title, description, link }) => {
  return (
    <a
      href={link}
      className="flex flex-col items-center text-center border rounded-xl p-6 shadow hover:shadow-md transition duration-300 ease-in-out"
    >
      <Icon className="text-[#c0122d] dark:text-yellow-300 text-5xl mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </a>
  );
};

const HelpCenter = () => {
  const helpSections = [
    {
      Icon: FaBookOpen,
      title: 'Getting Started',
      description:
        'Learn the basics of using EventStride, from creating an account to registering for your first marathon.',
      link: 'View Guides →',
    },
    {
      Icon: FaLifeRing,
      title: 'Troubleshooting',
      description:
        'Having an issue? Check out solutions for common problems and step-by-step fixes.',
      link: 'View Solutions →',
    },
    {
      Icon: FaEnvelope,
      title: 'Contact Support',
      description:
        'Can’t find what you’re looking for? Our support team is here to help you directly.',
      link: 'Get in Touch →',
    },
    {
      Icon: FaQuestionCircle,
      title: 'Event Guidelines',
      description:
        'Learn about our rules, safety tips, and event participation guidelines.',
      link: 'Read Guidelines →',
    },
    {
      Icon: FaBookOpen,
      title: 'Account & Billing',
      description:
        'Manage your account details, subscription plans, and billing preferences.',
      link: 'Manage Account →',
    },
    {
      Icon: FaLifeRing,
      title: 'Community Forum',
      description:
        'Join our community discussions and share your marathon experiences with others.',
      link: 'Visit Forum →',
    },
  ];

  return (
    <div className="w-11/12 mx-auto py-20 px-4 sm:px-6">
      <title>Help Center | EventStride</title>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold my-6">Help Center</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Welcome to the EventStride Help Center. Here you can find guides,
          tips, and ways to get support for your marathon events and
          registrations.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {helpSections.map((section, index) => (
          <HelpCard
            key={index}
            Icon={section.Icon}
            title={section.title}
            description={section.description}
            link={section.link}
          />
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;
