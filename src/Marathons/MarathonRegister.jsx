import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Lottie from 'lottie-react';
import marathonRegiste from '../assets/Lottie Files/maratonRegister.json';
import AuthUser from '@/Hoocks/AuthUser';
import Swal from 'sweetalert2';

const MarathonRegister = () => {
  const { id: marathonId } = useParams();
  const { user } = AuthUser();
  const navigate = useNavigate();
  const [marathon, setMarathon] = useState(null);

  useEffect(() => {
    axios
      .get(`https://event-stride-server.vercel.app/marathons/${marathonId}`, {
        withCredentials: true,
      })
      .then(res => setMarathon(res.data))
      .catch(err => console.error('Failed to fetch marathon:', err));
  }, [marathonId]);

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;

    const registrationData = {
      marathonId,
      applicantEmail: user.email,
      marathonTitle: marathon?.title,
      marathonStartDate: marathon?.marathonStartDate,
      image: marathon?.image,
      location: marathon?.location,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      contact: form.contact.value,
      additionalInfo: form.additionalInfo.value,
    };

    axios
      .post(
        'https://event-stride-server.vercel.app/registration',
        { withCredentials: true },
        registrationData
      )
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Successfully registered!',
            text: 'You have been registered for the marathon.',
            confirmButtonColor: '#10b981',
            position: 'top-end',
            width: '20em',
            showConfirmButton: true,
            toast: true,
            timer: 4000,
            timerProgressBar: true,
          }).then(() => {
            form.reset();
            navigate('/dashboard/dashboard/myRegistration');
          });
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Registration failed',
          text: 'Please try again later.',
          confirmButtonColor: '#ef4444',
        });
      });
  };

  return (
    <div className="w-full max-w-screen-xl px-4 mx-auto py-10">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Form */}
        <div className="w-full lg:w-1/2">
          <Card className="w-full mx-auto shadow-lg rounded-2xl dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Register for Marathon
              </CardTitle>
              <p className="text-center font-light font-rancho mt-2 dark:text-gray-300">
                Fill out your details to register
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full">
                    <Label className="mb-1 pl-2">First Name</Label>
                    <input
                      name="firstName"
                      required
                      placeholder="First Name"
                      className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                      type="text"
                    />
                  </div>
                  <div className="w-full">
                    <Label className="mb-1 pl-2">Last Name</Label>
                    <input
                      name="lastName"
                      required
                      placeholder="Last Name"
                      className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <Label className="mb-1 pl-2">Contact Number</Label>
                  <input
                    name="contact"
                    required
                    placeholder="Enter contact number"
                    className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                    type="tel"
                  />
                </div>

                <div>
                  <Label className="mb-1 pl-2">Email (Read Only)</Label>
                  <input
                    name="email"
                    value={user.email}
                    readOnly
                    className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                    type="email"
                  />
                </div>

                <div>
                  <Label className="mb-1 pl-2">Marathon Title</Label>
                  <input
                    type="text"
                    readOnly
                    value={marathon?.title || ''}
                    className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                  />
                </div>

                <div>
                  <Label className="mb-1 pl-2">Start Date</Label>
                  <input
                    type="text"
                    readOnly
                    value={marathon?.marathonStartDate || ''}
                    className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                  />
                </div>

                <div>
                  <Label className="mb-1 pl-2">Location</Label>
                  <input
                    type="text"
                    readOnly
                    value={marathon?.location || ''}
                    className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                  />
                </div>

                <div>
                  <Label className="mb-1 pl-2">Image URL</Label>
                  <input
                    type="text"
                    readOnly
                    value={marathon?.image || ''}
                    className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                  />
                </div>

                <div>
                  <Label className="mb-1 pl-2">Additional Info</Label>
                  <textarea
                    name="additionalInfo"
                    rows="3"
                    placeholder="Write something..."
                    className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                  />
                </div>

                <Button className="w-full text-[18px]" type="submit">
                  Submit Registration
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Animation */}
        <div className="w-full lg:w-1/2">
          <Lottie
            className="w-full max-w-md mx-auto h-auto"
            animationData={marathonRegiste}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default MarathonRegister;
