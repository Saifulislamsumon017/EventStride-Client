import React from 'react';

const TermsOfService = () => {
  return (
    <div className="w-11/12 mx-auto py-20 px-4 sm:px-6">
      {/* Page Title */}
      <title>Terms of Service | EventStride</title>

      {/* Heading */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#c0122d] to-orange-500 bg-clip-text text-transparent mb-6 text-center">
        Terms of Service
      </h1>

      {/* Intro */}
      <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg text-center max-w-3xl mx-auto">
        Welcome to EventStride! These Terms of Service ("Terms") govern your use
        of our website, services, and applications. By accessing or using our
        Service, you agree to these Terms. Please read them carefully.
      </p>

      {/* Sections */}
      <div className="space-y-8">
        {[
          {
            title: '1. Acceptance of Terms',
            text: 'By using EventStride, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, please do not use our Service.',
          },
          {
            title: '2. Changes to Terms',
            text: 'We may update or modify these Terms at any time. Updates will be effective upon posting. It is your responsibility to review the Terms periodically for changes.',
          },
          {
            title: '3. User Responsibilities',
            text: 'You agree to use the Service only for lawful purposes, in compliance with all applicable laws and regulations. Any unauthorized use of the Service is prohibited.',
          },
          {
            title: '4. Account Security',
            text: 'You are responsible for maintaining the confidentiality of your account credentials. EventStride is not responsible for any loss or damage resulting from unauthorized access to your account.',
          },
          {
            title: '5. Limitation of Liability',
            text: 'EventStride is provided "as is" without any warranties, expressed or implied. We are not liable for any damages arising from your use of the Service.',
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

export default TermsOfService;
