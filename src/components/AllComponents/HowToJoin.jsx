import React, { useState } from 'react';
import Swal from 'sweetalert2';

const HowToJoin = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops!',
        text: 'Please enter your email address.',
        confirmButtonColor: '#c0122d',
      });
      return;
    }

    // এখানে তুমি চাইলে API call করতে পারো

    Swal.fire({
      icon: 'success',
      title: 'Subscribed!',
      text: `You have successfully subscribed with: ${email}`,
      confirmButtonColor: '#c0122d',
      showConfirmButton: true,
      timer: 2500,
    });

    setEmail('');
  };

  return (
    <div className="w-full mt-20 px-2 text-center py-20 flex flex-col items-center justify-center border rounded-xl shadow hover:shadow-md transition-colors duration-300">
      <p className="font-medium">Get updated</p>
      <h1 className="max-w-lg font-semibold text-4xl mt-2 text-gray-900 dark:text-white transition-colors duration-300">
        Subscribe to our newsletter & get the latest news
      </h1>

      <div className="flex items-center justify-center mt-10 border border-gray-300 dark:border-slate-600 focus-within:outline text-sm rounded-full h-14 max-w-md w-full transition-colors duration-300">
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
