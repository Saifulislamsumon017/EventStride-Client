import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

import { Label } from '../ui/label';
import AuthUser from '@/Hoocks/AuthUser';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Modal = ({ marathon, refetch }) => {
  const {
    _id,
    image,
    companyName,
    location,
    title,
    description,
    userEmail,
    distance: initialDistance,
    registrationStartDate,
    registrationEndDate,
    marathonStartDate,
  } = marathon;

  const { user } = AuthUser();
  const navigate = useNavigate();

  const [startReg, setStartReg] = useState(new Date(registrationStartDate));
  const [endReg, setEndReg] = useState(new Date(registrationEndDate));
  const [marathonStart, setMarathonStart] = useState(
    new Date(marathonStartDate)
  );
  const [distance, setDistance] = useState(initialDistance || '10k');

  const handleUpdatedMarathon = e => {
    e.preventDefault();
    const form = e.target;

    const updatedMarathon = {
      title: form.title.value,
      image: form.image.value,
      companyName: form.companyName.value,
      userEmail: form.userEmail.value,
      location: form.location.value,
      distance,
      description: form.description.value,
      registrationStartDate: startReg?.toISOString(),
      registrationEndDate: endReg?.toISOString(),
      marathonStartDate: marathonStart?.toISOString(),
    };

    console.log(updatedMarathon);

    fetch(`https://event-stride-server.vercel.app/marathons/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedMarathon),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.modifiedCount) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Marathon updated successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/marathons');
          refetch && refetch();
        }
      })
      .catch(error => {
        console.error('Error updating marathon:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again!',
        });
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className=" bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
          variant="outline"
        >
          <FaRegEdit className="inline" />
          Update
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-center">Update Marathon</DialogTitle>
          <DialogDescription className="text-center">
            Fill out the form below to update marathon details.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleUpdatedMarathon}>
          <div className="flex gap-4">
            <div className="w-1/2">
              <Label className="pl-2 py-2">Marathon Title</Label>
              <input
                name="title"
                type="text"
                defaultValue={title}
                placeholder="Marathon Title"
                className="dark:border-gray-600 dark:bg-gray-900 w-full border pl-2 py-2 rounded"
                required
              />
            </div>
            <div className="w-1/2">
              <Label className="pl-2 py-2">Marathon Image URL</Label>
              <input
                name="image"
                type="url"
                defaultValue={image}
                placeholder="https://example.com/image.jpg"
                className="dark:border-gray-600 dark:bg-gray-900 w-full border pl-2 py-2 rounded"
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <Label className="pl-2 py-2">Company Name</Label>
              <input
                name="companyName"
                type="text"
                defaultValue={companyName}
                placeholder="SprintMasters Inc."
                className="dark:border-gray-600 dark:bg-gray-900 w-full border pl-2 py-2 rounded"
                required
              />
            </div>
            <div className="w-1/2">
              <Label className="pl-2 py-2">Organizer Email</Label>
              <input
                name="userEmail"
                type="email"
                defaultValue={user?.email || userEmail}
                readOnly
                className="dark:border-gray-600 dark:bg-gray-900 w-full border pl-2 py-2 rounded"
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <Label className="pl-2 py-2">Location</Label>
              <input
                name="location"
                type="text"
                defaultValue={location}
                placeholder="Dhaka, Bangladesh"
                className="dark:border-gray-600 dark:bg-gray-900 w-full border pl-2 py-2 rounded"
                required
              />
            </div>
            <div className="w-1/2">
              <Label className="pl-2 py-2">Running Distance</Label>
              <select
                value={distance}
                onChange={e => setDistance(e.target.value)}
                className="dark:border-gray-600 dark:bg-gray-900 w-full border pl-2 py-2 rounded"
              >
                <option value="3k">3k</option>
                <option value="10k">10k</option>
                <option value="15km">15km</option>
                <option value="25k">25k</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex-1">
              <Label className="pl-2 py-2">Start Registration</Label>
              <DatePicker
                selected={startReg}
                onChange={date => setStartReg(date)}
                className="dark:border-gray-600 dark:bg-gray-900 w-full border pl-3 py-2 rounded"
                placeholderText="Start Date"
                required
              />
            </div>
            <div className="flex-1">
              <Label className="pl-2 py-2">End Registration</Label>
              <DatePicker
                selected={endReg}
                onChange={date => setEndReg(date)}
                className="dark:border-gray-600 dark:bg-gray-900 w-full border pl-3 py-2 rounded"
                placeholderText="End Date"
                required
              />
            </div>
            <div className="flex-1">
              <Label className="pl-2 py-2">Marathon Date</Label>
              <DatePicker
                selected={marathonStart}
                onChange={date => setMarathonStart(date)}
                className="dark:border-gray-600 dark:bg-gray-900 w-full border pl-2 py-2 rounded"
                placeholderText="Marathon Date"
                required
              />
            </div>
          </div>

          <div>
            <Label className="pl-2 py-2">Description</Label>
            <textarea
              name="description"
              defaultValue={description}
              rows="3"
              placeholder="Describe the marathon..."
              className="dark:border-gray-600 dark:bg-gray-900 w-full border pl-2 py-2 rounded"
              required
            ></textarea>
          </div>

          <div className="flex gap-4 py-6">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button type="submit">Save changes</Button>
          </div>
        </form>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
