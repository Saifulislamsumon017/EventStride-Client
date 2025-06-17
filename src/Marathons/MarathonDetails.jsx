import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Link, useLoaderData } from 'react-router';
import AuthUser from '@/Hoocks/AuthUser';
import { Helmet } from 'react-helmet';

const MarathonDetails = () => {
  const marathon = useLoaderData();
  const { user } = AuthUser();

  const {
    _id,
    title,
    image,
    location,
    distance,
    description,
    companyName,
    registrationStartDate,
    registrationEndDate,
    marathonStartDate,
  } = marathon;

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [hasRegistered, setHasRegistered] = useState(false);
  const [durationInSeconds, setDurationInSeconds] = useState(0);
  const [registrationCount, setRegistrationCount] = useState(0);

  useEffect(() => {
    const now = new Date();
    const regStart = new Date(registrationStartDate);
    const regEnd = new Date(registrationEndDate);
    const marathonStart = new Date(marathonStartDate);

    setIsRegistrationOpen(now >= regStart && now <= regEnd);
    setDurationInSeconds(Math.floor((marathonStart - now) / 1000));
  }, [registrationStartDate, registrationEndDate, marathonStartDate]);

  useEffect(() => {
    if (!user?.email) return;

    // Check if user already registered for this marathon
    fetch(`http://localhost:3000/registration?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        const alreadyRegistered = data.some(r => r.marathonId === _id);
        setHasRegistered(alreadyRegistered);
      });

    // Fetch total registration count for this marathon
    fetch(`http://localhost:3000/registrations/count?marathonId=${_id}`)
      .then(res => res.json())
      .then(data => setRegistrationCount(data?.count || 0));
  }, [_id, user?.email]);

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8 items-center">
      <Helmet>
        <title>All Marathons | {title}</title>
      </Helmet>

      <div className="rounded-2xl overflow-hidden shadow-xl">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-blue-700">{title}</h1>
        <p>
          <span className="font-semibold">Company:</span> {companyName}
        </p>
        <p>
          <span className="font-semibold">Location:</span> {location}
        </p>
        <p>
          <span className="font-semibold">Distance:</span> {distance}
        </p>
        <p>{description}</p>

        <p className="text-lg font-medium text-green-700">
          Total Registered: {registrationCount}
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <CountdownCircleTimer
            isPlaying
            duration={durationInSeconds}
            initialRemainingTime={durationInSeconds}
            colors="#0D9488"
            size={100}
            strokeWidth={10}
            trailColor="#eee"
          >
            {({ remainingTime }) => {
              const days = Math.floor(remainingTime / (60 * 60 * 24));
              return (
                <div className="text-center">
                  <div className="text-2xl font-bold">{days}</div>
                  <div className="text-sm">Days</div>
                </div>
              );
            }}
          </CountdownCircleTimer>

          <CountdownCircleTimer
            isPlaying
            duration={86400}
            initialRemainingTime={durationInSeconds % 86400}
            colors="#F59E0B"
            size={100}
            strokeWidth={10}
            trailColor="#eee"
            onComplete={() => ({ shouldRepeat: true })}
          >
            {({ remainingTime }) => {
              const hours = Math.floor((remainingTime % 86400) / 3600);
              return (
                <div className="text-center">
                  <div className="text-2xl font-bold">{hours}</div>
                  <div className="text-sm">Hours</div>
                </div>
              );
            }}
          </CountdownCircleTimer>

          <CountdownCircleTimer
            isPlaying
            duration={3600}
            initialRemainingTime={durationInSeconds % 3600}
            colors="#EF4444"
            size={100}
            strokeWidth={10}
            trailColor="#eee"
            onComplete={() => ({ shouldRepeat: true })}
          >
            {({ remainingTime }) => {
              const minutes = Math.floor((remainingTime % 3600) / 60);
              return (
                <div className="text-center">
                  <div className="text-2xl font-bold">{minutes}</div>
                  <div className="text-sm">Minutes</div>
                </div>
              );
            }}
          </CountdownCircleTimer>
        </div>

        <div className="mt-6">
          {hasRegistered ? (
            <p className="text-yellow-600 font-medium">
              You have already registered.
            </p>
          ) : isRegistrationOpen ? (
            <Link to={`/marathonRegister/${_id}`}>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Register Now
              </button>
            </Link>
          ) : (
            <button
              disabled
              className="bg-red-800 text-white px-6 py-2 rounded cursor-not-allowed"
            >
              Registration Closed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarathonDetails;
