import React from 'react';

const Loading = () => {
  return (
    <div className="max-w-11/12 mx-auto pt-20 flex justify-between items-center px-4 md:px-0">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    </div>
  );
};

export default Loading;
