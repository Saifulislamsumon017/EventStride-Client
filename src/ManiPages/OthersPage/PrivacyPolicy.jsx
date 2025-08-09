import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="w-11/12 mx-auto py-20 px-4 sm:px-6">
      <title>Privacy Policy | EventStride</title>

      {/* Heading */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#c0122d] to-orange-500 bg-clip-text text-transparent mb-6 text-center">
        Privacy Policy
      </h1>

      {/* Intro */}
      <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg text-center max-w-3xl mx-auto">
        At EventStride, we value your privacy and are committed to protecting
        your personal information. This Privacy Policy explains how we collect,
        use, and safeguard your data when you use our services.
      </p>

      {/* Sections */}
      <div className="space-y-8">
        {[
          {
            title: '1. Information We Collect',
            text: 'We collect information you provide directly to us when registering, such as your name, email address, and payment details. We also collect usage data automatically to improve our services.',
          },
          {
            title: '2. How We Use Your Information',
            text: 'Your information is used to provide and improve our services, process transactions, communicate important updates, and comply with legal obligations.',
          },
          {
            title: '3. Data Sharing and Disclosure',
            text: 'We do not sell your personal information. We may share data with trusted third-party service providers who help us operate the platform, under strict confidentiality agreements.',
          },
          {
            title: '4. Data Security',
            text: 'We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration.',
          },
          {
            title: '5. Your Rights',
            text: 'You have the right to access, update, or delete your personal information. Please contact our support team to exercise these rights.',
          },
          {
            title: '6. Changes to this Policy',
            text: 'We may update this Privacy Policy from time to time. We encourage you to review it periodically for any changes.',
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

export default PrivacyPolicy;
