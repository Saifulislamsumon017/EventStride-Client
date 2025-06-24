import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Lottie from 'lottie-react';
import Animation from '../assets/Lottie Files/Animation.json';
import AuthUser from '@/Hoocks/AuthUser';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const AddMarathon = () => {
  const { user } = AuthUser();
  const navigate = useNavigate();
  const [startReg, setStartReg] = useState(null);
  const [endReg, setEndReg] = useState(null);
  const [marathonStart, setMarathonStart] = useState(null);
  const [distance, setDistance] = useState('10k');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddMarathon = async e => {
    e.preventDefault();

    if (!startReg || !endReg || !marathonStart) {
      Swal.fire({
        icon: 'warning',
        title: 'Please fill in all dates',
      });
      return;
    }

    setIsSubmitting(true);
    const form = e.target;

    const addMarathon = {
      title: form.title.value,
      registrationStartDate: startReg.toISOString().split('T')[0],
      registrationEndDate: endReg.toISOString().split('T')[0],
      marathonStartDate: marathonStart.toISOString().split('T')[0],
      location: form.location.value,
      distance,
      description: form.description.value,
      image: form.image.value,
      companyName: form.companyName.value,
      userEmail: form.userEmail.value,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await axios.post(
        'https://event-stride-server.vercel.app/marathons',

        addMarathon
      );
      if (res.data.insertedId || res.data.acknowledged) {
        await Swal.fire({
          icon: 'success',
          title: 'Successfully registered!',
          text: 'The marathon has been successfully added.',
          confirmButtonColor: '#10b981',
          position: 'top-end',
          width: '20em',
          showConfirmButton: true,
          toast: true,
          timer: 4000,
          timerProgressBar: true,
        });

        form.reset();
        setStartReg(null);
        setEndReg(null);
        setMarathonStart(null);
        setDistance('10k');
        navigate('/marathons');
      } else {
        throw new Error('Insert failed');
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to add marathon. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-8 px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center ml-0 md:ml-[320px]">
      <title>Dashboard | Add Marathon</title>

      {/* Lottie Animation */}
      <div className="w-full lg:w-[450px] max-w-[450px] mb-10 lg:mb-0">
        <Lottie
          animationData={Animation}
          loop={true}
          className="w-full h-full"
        />
      </div>

      {/* Form */}
      <div className="w-full max-w-[700px]">
        <Card className="w-full shadow-md rounded-2xl dark:bg-gray-800 dark:border-gray-600">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center text-2xl">Add A Marathon</h1>
              <p className="text-center font-light font-rancho mt-2 dark:text-gray-300">
                Fill the details below to organize a marathon
              </p>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form className="space-y-4" onSubmit={handleAddMarathon}>
              <div>
                <Label className="pl-2 py-2">Marathon Title</Label>
                <input
                  name="title"
                  type="text"
                  placeholder="Marathon Title"
                  className="w-full dark:bg-gray-900 dark:border-gray-600 font-abel border pl-2 py-2 rounded"
                  required
                />
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label className="pl-2 py-2 block">Start Registration</Label>
                  <DatePicker
                    selected={startReg}
                    onChange={date => setStartReg(date)}
                    className="w-full dark:bg-gray-900 dark:border-gray-600 font-abel border pl-2 py-2 rounded h-10"
                    placeholderText="Start Date"
                    required
                  />
                </div>

                <div>
                  <Label className="pl-2 py-2 block">End Registration</Label>
                  <DatePicker
                    selected={endReg}
                    onChange={date => setEndReg(date)}
                    className="w-full dark:bg-gray-900 dark:border-gray-600 font-abel border pl-2 py-2 rounded h-10"
                    placeholderText="End Date"
                    required
                  />
                </div>

                <div>
                  <Label className="pl-2 py-2 block">Marathon Start Date</Label>
                  <DatePicker
                    selected={marathonStart}
                    onChange={date => setMarathonStart(date)}
                    className="w-full dark:bg-gray-900 dark:border-gray-600 font-abel border pl-2 py-2 rounded h-10"
                    placeholderText="Marathon Date"
                    required
                  />
                </div>
              </div>

              <div>
                <Label className="pl-2 py-2">Location</Label>
                <input
                  name="location"
                  type="text"
                  placeholder="Dhaka, Bangladesh"
                  className="w-full dark:bg-gray-900 dark:border-gray-600 font-abel border pl-2 py-2 rounded"
                  required
                />
              </div>

              <div>
                <Label className="pl-2 py-2">Running Distance</Label>
                <select
                  value={distance}
                  onChange={e => setDistance(e.target.value)}
                  className="w-full dark:bg-gray-900 dark:border-gray-600 font-abel border pl-2 py-2 rounded"
                >
                  <option value="3k">3k</option>
                  <option value="10k">10k</option>
                  <option value="15km">15km</option>
                  <option value="25k">25k</option>
                </select>
              </div>

              <div>
                <Label className="pl-2 py-2">Description</Label>
                <textarea
                  name="description"
                  rows="3"
                  placeholder="Describe the marathon..."
                  className="w-full dark:bg-gray-900 dark:border-gray-600 font-abel border pl-2 py-2 rounded"
                  required
                />
              </div>

              <div>
                <Label className="pl-2 py-2">Marathon Image URL</Label>
                <input
                  name="image"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="w-full dark:bg-gray-900 dark:border-gray-600 font-abel border pl-2 py-2 rounded"
                  required
                />
              </div>

              <div>
                <Label className="pl-2 py-2">Organizer Email</Label>
                <input
                  name="userEmail"
                  type="email"
                  defaultValue={user.email}
                  readOnly
                  className="w-full dark:bg-gray-900 dark:border-gray-600 font-abel border pl-2 py-2 rounded"
                />
              </div>

              <div>
                <Label className="pl-2 py-2">Company Name</Label>
                <input
                  name="companyName"
                  type="text"
                  placeholder="SprintMasters Inc."
                  className="w-full dark:bg-gray-900 dark:border-gray-600 font-abel border pl-2 py-2 rounded"
                  required
                />
              </div>

              <Button
                className="w-full text-[18px]"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Marathon'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddMarathon;
