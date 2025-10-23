import React, { useState } from 'react';

const HowToJoin = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return alert('Please enter your email.');
    // API call to save email can be added here
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <div className="w-full mb-20 px-2 text-center py-20 flex flex-col items-center justify-center border rounded-xl shadow hover:shadow-md transition-colors duration-300">
      <p className="font-medium">Get updated</p>
      <h1 className="max-w-lg font-semibold text-4xl mt-2 text-gray-900 dark:text-white transition-colors duration-300">
        Subscribe to our newsletter & get the latest news
      </h1>

      <div className="flex items-center justify-center mt-10 border border-gray-300 dark:border-slate-600 focus-within:outline  text-sm rounded-full h-14 max-w-md w-full transition-colors duration-300">
        <input
          type="email"
          className="bg-transparent outline-none rounded-full px-4 h-full flex-1 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 transition-colors duration-300"
          placeholder="Enter your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubscribe}
          className="bg-[#c0122d] text-white rounded-full h-11 mr-1 px-8 flex items-center justify-center hover:bg-[#c0122cda] transition-colors duration-300"
        >
          Subscribe now
        </button>
      </div>
    </div>
  );
};

export default HowToJoin;
