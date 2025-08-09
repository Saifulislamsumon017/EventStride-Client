import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import SlideImg1 from '../../assets/Lottie Files/Run the World.webp';
import SlideImg2 from '../../assets/Lottie Files/Sunset wep.webp';
import SlideImg3 from '../../assets/Lottie Files/marathon events.webp';
import SlideImg4 from '../../assets/Lottie Files/EventApplication.webp';
import { Link } from 'react-router';

const slides = [
  {
    img: SlideImg1,
    title: 'Run the World, One Event at a Time',
    desc: 'Explore upcoming marathons across cities and countries.',
    btn: 'Browse Events',
    link: '/marathons', // Add your route here
  },
  {
    img: SlideImg2,
    title: 'Join with Just a Click',
    desc: 'Seamless sign-up and secure registration in seconds.',
    btn: 'Register Now',
    link: '/marathonRegister/:id',
  },
  {
    img: SlideImg3,
    title: 'Host, Manage, Succeed',
    desc: 'Create and manage your own marathon events effortlessly.',
    btn: 'Start Organizing',
    link: '/marathons',
  },
  {
    img: SlideImg4,
    title: 'Your Races, Your Records',
    desc: 'Track all your marathon applications and events in one place.',
    btn: 'Go to Dashboard',
    link: '/dashboard',
  },
];

const HeroBanner = () => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        interval={4000}
        emulateTouch
        swipeable
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="relative">
            {/* Slide Image */}
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover"
            />
            {/* Overlay for dark effect */}
            <div className="absolute inset-0 bg-black/60"></div>
            {/* Slide Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-2">
              <h1 className="text-white text-center font-Rancho text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-[90%] sm:w-4/5 md:w-3/5 lg:w-2/4 mx-auto">
                {slide.title}
              </h1>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-2xl text-center w-[90%] sm:w-4/5 md:w-3/5 lg:w-2/4 mx-auto">
                {slide.desc}
              </p>
              <Link
                to={slide.link}
                className="px-6 sm:px-8 py-2 text-base sm:text-lg md:text-xl font-Rancho font-semibold text-white border-2 border-white rounded-full
                  hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
              >
                {slide.btn}
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
