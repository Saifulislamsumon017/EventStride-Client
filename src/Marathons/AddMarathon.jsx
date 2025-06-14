import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Lottie from 'lottie-react';
import Animation from '../assets/Lottie Files/Animation.json';
import AuthUser from '@/Hoocks/AuthUser';
<assets />;

const AddMarathon = () => {
  const { user } = AuthUser();
  const [startReg, setStartReg] = useState(null);
  const [endReg, setEndReg] = useState(null);
  const [marathonStart, setMarathonStart] = useState(null);
  const [distance, setDistance] = useState('10k');

  const handleAddMarathon = async e => {
    e.preventDefault();
    const form = e.target;

    const newMarathon = {
      title: form.title.value,
      registrationStartDate: startReg?.toISOString().split('T')[0],
      registrationEndDate: endReg?.toISOString().split('T')[0],
      marathonStartDate: marathonStart?.toISOString().split('T')[0],
      location: form.location.value,
      distance,
      description: form.description.value,
      image: form.image.value,
      companyName: form.companyName.value,
      userEmail: form.userEmail.value,
      createdAt: form.createdAt.value,
    };

    console.log(newMarathon);

    // Optional: Send to server
    /*
    try {
      const res = await fetch('http://localhost:3000/marathons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMarathon),
      });

      const result = await res.json();
      console.log(result);
    } catch (err) {
      console.error('Error submitting marathon:', err);
    }
    */
  };

  return (
    <div className="flex flex-col md:flex-row ml-0 md:ml-[320px]">
      <div className="w-full md:w-[450px]">
        <Lottie
          className="w-full h-full"
          animationData={Animation}
          loop={true}
        />
      </div>

      <div className="flex-1 flex justify-center items-center pt-10">
        <Card className="w-full max-w-[600px] mx-auto shadow rounded-2xl dark:bg-gray-800 dark:border-gray-600">
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
                  className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row md:justify-between gap-4">
                <div className="flex-1">
                  <Label className="pl-2 py-2">Start Registration</Label>
                  <DatePicker
                    selected={startReg}
                    onChange={date => setStartReg(date)}
                    className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-3 py-2 rounded box-border h-10"
                    placeholderText="Start Date"
                    required
                  />
                </div>
                <div className="flex-1">
                  <Label className="pl-2 py-2">End Registration</Label>
                  <DatePicker
                    selected={endReg}
                    onChange={date => setEndReg(date)}
                    className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-3 py-2 rounded box-border h-10"
                    placeholderText="End Date"
                    required
                  />
                </div>
                <div className="flex-1">
                  <Label className="pl-2 py-2">Marathon Start Date</Label>
                  <DatePicker
                    selected={marathonStart}
                    onChange={date => setMarathonStart(date)}
                    className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
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
                  className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                  required
                />
              </div>

              <div>
                <Label className="pl-2 py-2">Running Distance</Label>
                <select
                  value={distance}
                  onChange={e => setDistance(e.target.value)}
                  className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
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
                  className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                  required
                ></textarea>
              </div>

              <div>
                <Label className="pl-2 py-2">Marathon Image URL</Label>
                <input
                  name="image"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
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
                  placeholder="organizer@example.com"
                  className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                  required
                />
              </div>

              <div>
                <Label className="pl-2 py-2">Company Name</Label>
                <input
                  name="companyName"
                  type="text"
                  placeholder="SprintMasters Inc."
                  className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                  required
                />
              </div>

              {/* Hidden Created At Field */}
              <input
                type="hidden"
                name="createdAt"
                value={new Date().toISOString()}
              />

              <Button
                className="w-full cursor-pointer text-[18px]"
                type="submit"
              >
                Submit Marathon
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddMarathon;
