import React from 'react';
import SlideImg1 from '../../assets/Lottie Files/Run the World.webp';
import SlideImg2 from '../../assets/Lottie Files/Sunset wep.webp';

import SlideImg3 from '../../assets/Lottie Files/marathon events.webp';
import SlideImg4 from '../../assets/Lottie Files/EventApplication.webp';

const HeroBanner = () => {
  return (
    <div className="carousel w-full">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full rounded-2xl">
        <img
          src={SlideImg1}
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-2">
          <h1 className="text-white text-center font-Rancho text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-[90%] sm:w-4/5 md:w-3/5 lg:w-2/4 mx-auto">
            Run the World, One Event at a Time
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-2xl text-center w-[90%] sm:w-4/5 md:w-3/5 lg:w-2/4 mx-auto">
            Explore upcoming marathons across cities and countries.
          </p>
          <button className="px-4 sm:px-6 py-2 text-base sm:text-lg md:text-xl font-Rancho font-semibold text-white border-2 border-white rounded-full">
            Browse Events
          </button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full rounded-2xl">
        <img
          src={SlideImg2}
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-2">
          <h1 className="text-white text-center font-Rancho text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-[90%] sm:w-4/5 md:w-3/5 lg:w-2/4 mx-auto">
            Join with Just a Click
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-2xl text-center w-[90%] sm:w-4/5 md:w-3/5 lg:w-2/4 mx-auto">
            Seamless sign-up and secure registration in seconds.
          </p>
          <button className="px-4 sm:px-6 py-2 text-base sm:text-lg md:text-xl font-Rancho font-semibold text-white border-2 border-white rounded-full">
            Register Now
          </button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full rounded-2xl">
        <img
          src={SlideImg3}
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-2">
          <h1 className="text-white text-center font-Rancho text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-[90%] sm:w-4/5 md:w-3/5 lg:w-2/4 mx-auto">
            Host, Manage, Succeed
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-2xl text-center w-[90%] sm:w-4/5 md:w-3/5 lg:w-2/4 mx-auto">
            Create and manage your own marathon events effortlessly.
          </p>
          <button className="px-4 sm:px-6 py-2 text-base sm:text-lg md:text-xl font-Rancho font-semibold text-white border-2 border-white rounded-full">
            Start Organizing
          </button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full rounded-2xl">
        <img
          src={SlideImg4}
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-2">
          <h1 className="text-white text-center font-Rancho text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-[90%] sm:w-4/5 md:w-3/5 lg:w-2/4 mx-auto">
            Your Races, Your Records
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-2xl text-center w-[90%] sm:w-4/5 md:w-3/5 lg:w-2/4 mx-auto">
            Track all your marathon applications and events in one place.
          </p>
          <button className="px-4 sm:px-6 py-2 text-base sm:text-lg md:text-xl font-Rancho font-semibold text-white border-2 border-white rounded-full">
            Go to Dashboard
          </button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
