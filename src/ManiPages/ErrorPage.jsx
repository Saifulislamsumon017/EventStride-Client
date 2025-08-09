import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* 404 Title */}
      <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 animate-pulse">
        404
      </h1>

      {/* Decorative line */}
      <div className="h-1 w-20 rounded bg-gradient-to-r from-red-500 to-yellow-400 my-6"></div>

      {/* Main message */}
      <p className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white text-center font-Rancho">
        Oops! Page Not Found
      </p>

      {/* Sub message */}
      <p className="text-base md:text-lg mt-4 text-gray-600 dark:text-gray-300 max-w-lg text-center">
        The page you’re looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
        <a
          href="/"
          className="bg-gradient-to-r from-red-500 to-yellow-400 text-white px-8 py-3 rounded-lg shadow-lg hover:opacity-90 active:scale-95 transition-all font-semibold"
        >
          Return Home
        </a>
        <a
          href="/contact"
          className="border border-gray-400 dark:border-gray-300 px-8 py-3 rounded-lg text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95 transition-all font-semibold"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
