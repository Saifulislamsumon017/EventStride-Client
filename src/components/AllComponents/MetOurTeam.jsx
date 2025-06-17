import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
import Img1 from '../../assets/Lottie Files/1.webp';
import Img2 from '../../assets/Lottie Files/2.webp';
import Img3 from '../../assets/Lottie Files/3.webp';
import Img4 from '../../assets/Lottie Files/4.webp';
import Img5 from '../../assets/Lottie Files/5.jpg';
import Img6 from '../../assets/Lottie Files/6.jpg';
const MetOurTeam = () => {
  return (
    <div className="mt-20">
      <h3 className="text-4xl  text-center sm:text-5xl">Meet our team</h3>
      <p className=" w-2/5 mx-auto text-center pb-6 dark:text-gray-600">
        At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur
        quam natus quis nihil quod, hic explicabo doloribus magnam neque,
        exercitationem eius sunt!
      </p>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex space-x-6">
          <img
            alt=""
            className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
            src={Img1}
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">Sophie Bennett</h1>
            <h4> Logistics Coordinator</h4>
            <p className="text-sm dark:text-gray-600">
              Sophie handles on-ground logistics — from race routes to hydration
              stations.
            </p>
            <div className="flex mt-2 space-x-2">
              <Link>
                <FaSquareXTwitter />
              </Link>
              <Link>
                <FaLinkedin />
              </Link>
              <Link>
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex space-x-6">
          <img
            alt=""
            className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
            src={Img2}
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">Daniel Foster</h1>
            <h4>Race Director</h4>
            <p className="text-sm dark:text-gray-600">
              Leads the entire event from planning to execution. Ensures
              everything runs on time — just like you.
            </p>
            <div className="flex mt-2 space-x-2">
              <Link>
                <FaSquareXTwitter />
              </Link>
              <Link>
                <FaLinkedin />
              </Link>
              <Link>
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex space-x-6">
          <img
            alt=""
            className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
            src={Img3}
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">Lucas Meyer</h1>
            <h4>Volunteer Manager</h4>
            <p className="text-sm dark:text-gray-600">
              Lucas leads our amazing volunteer squad who’ll support you from
              start to finish.
            </p>
            <div className="flex mt-2 space-x-2">
              <Link>
                <FaSquareXTwitter />
              </Link>
              <Link>
                <FaLinkedin />
              </Link>
              <Link>
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex space-x-6">
          <img
            alt=""
            className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
            src={Img4}
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">Emma Johansson</h1>
            <h4>Medical Coordinator</h4>
            <p className="text-sm dark:text-gray-600">
              Emma coordinates emergency services and medical aid to keep all
              runners safe.
            </p>
            <div className="flex mt-2 space-x-2">
              <Link>
                <FaSquareXTwitter />
              </Link>
              <Link>
                <FaLinkedin />
              </Link>
              <Link>
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex space-x-6">
          <img
            alt=""
            className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
            src={Img5}
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">Carlos Rivera</h1>
            <h4>Sponsorship & PR Lead</h4>
            <p className="text-sm dark:text-gray-600">
              Carlos builds key partnerships and promotes the event globally.
            </p>
            <div className="flex mt-2 space-x-2">
              <Link>
                <FaSquareXTwitter />
              </Link>
              <Link>
                <FaLinkedin />
              </Link>
              <Link>
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex space-x-6">
          <img
            alt=""
            className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
            src={Img6}
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">Ava Thompson</h1>
            <h4>Registration & Communications Lead</h4>
            <p className="text-sm dark:text-gray-600">
              Ava manages participant registrations and keeps everyone informed
              and engaged.
            </p>
            <div className="flex mt-2 space-x-2">
              <Link>
                <FaSquareXTwitter />
              </Link>
              <Link>
                <FaLinkedin />
              </Link>
              <Link>
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetOurTeam;
