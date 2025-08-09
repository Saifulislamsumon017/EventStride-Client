import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="w-11/12 mx-auto py-20 px-4 sm:px-6">
      <title>Cookie Policy | EventStride</title>

      {/* Heading */}
      <h1 className="text-4xl my-6 font-bold bg-gradient-to-r from-[#c0122d] to-orange-500 bg-clip-text text-transparent mb-6 text-center">
        Cookie Policy
      </h1>

      {/* Intro */}
      <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg text-center max-w-3xl mx-auto">
        This Cookie Policy explains how EventStride uses cookies and similar
        technologies to enhance your experience, analyze usage, and provide
        personalized content.
      </p>

      {/* Sections */}
      <div className="space-y-8">
        {[
          {
            title: '1. What Are Cookies?',
            text: 'Cookies are small text files stored on your device by websites to help remember information about your visit.',
          },
          {
            title: '2. How We Use Cookies',
            text: 'We use cookies to improve website functionality, analyze site traffic, and deliver tailored content and ads.',
          },
          {
            title: '3. Types of Cookies We Use',
            text: 'We use essential cookies for core functionality, performance cookies to analyze site usage, and advertising cookies to deliver relevant ads.',
          },
          {
            title: '4. Managing Cookies',
            text: 'You can control and delete cookies through your browser settings. However, disabling cookies may affect some features on our site.',
          },
          {
            title: '5. Changes to This Policy',
            text: 'We may update this Cookie Policy occasionally. Please review it periodically to stay informed about our cookie practices.',
          },
        ].map((section, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 ease-in-out"
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              {section.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{section.text}</p>
          </div>
        ))}
      </div>

      {/* Last Updated */}
      <p className="text-sm text-gray-500 mt-10 text-center">
        Last updated: August 10, 2025
      </p>
    </div>
  );
};

export default CookiePolicy;
