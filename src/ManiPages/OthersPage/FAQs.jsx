import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is EventStride?',
    answer:
      'EventStride is a platform designed to help you discover, register, and participate in marathon events with ease.',
  },
  {
    question: 'How do I register for an event?',
    answer:
      'Simply browse upcoming marathons, click on the one you like, and follow the registration instructions on the event page.',
  },
  {
    question: 'Can I update my registration after submission?',
    answer:
      'Yes, you can log into your account and modify your registration details before the registration deadline.',
  },
  {
    question: 'Is there a cancellation policy?',
    answer:
      'Cancellations are accepted up to 7 days before the event date. Refunds are processed according to our refund policy.',
  },
  {
    question: 'Do you offer virtual marathons?',
    answer:
      'Yes! We organize virtual marathons where you can participate from anywhere in the world.',
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-11/12 mx-auto py-20 px-4 sm:px-6">
      <title>FAQs | EventStride</title>

      <h1 className="text-4xl my-6 text-center">Frequently Asked Questions</h1>
      <p className="text-center  max-w-2xl mx-auto mb-10">
        Got questions? We’ve got answers. Here’s everything you need to know
        about EventStride.
      </p>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full px-5 py-4 text-left text-lg font-medium text-gray-800 dark:text-gray-200 focus:outline-none"
            >
              {faq.question}
              {openIndex === index ? (
                <FaChevronUp className="text-primary" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
