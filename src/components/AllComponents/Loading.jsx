import React from 'react';

const Loading = () => {
  return (
    <div className="ball-container">
      <div className="ball">
        <div className="inner">
          <div className="line"></div>
          <div className="line line--two"></div>
          <div className="oval"></div>
          <div className="oval oval--two"></div>
        </div>
      </div>
      <div className="shadow"></div>
    </div>
  );
};

export default Loading;
