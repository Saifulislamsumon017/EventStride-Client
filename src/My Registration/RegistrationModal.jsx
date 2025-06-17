import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import AuthUser from '@/Hoocks/AuthUser';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const RegistrationModal = ({ registration, refetch }) => {
  const {
    _id,
    marathonTitle,
    marathonStartDate,
    firstName,
    lastName,
    contact,
    additionalInfo,
  } = registration;
  const { user } = AuthUser();
  const navigate = useNavigate();
  const [marathonStart, setMarathonStart] = useState(
    new Date(marathonStartDate)
  );

  const handleUpdatedRegistration = e => {
    e.preventDefault();
    const form = e.target;

    const updatedMarathon = {
      title: form.title.value,

      firstName: form.firstName.value,
      lastName: form.lastName.value,
      contact: form.contact.value,
      userEmail: form.userEmail.value,
      description: form.description.value,
      marathonStartDate: marathonStart?.toISOString(),
    };
    console.log(updatedMarathon);

    fetch(`https://event-stride-server.vercel.app/registration/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedMarathon),
    })
      .then(res => res.json())
      .then(result => {
        if (result.modifiedCount) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Registration updated successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/dashboard');
          refetch && refetch();
        }
      })
      .catch(error => {
        console.error('Error updating Registration:', error);
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
          <DialogTitle className="text-center">Update Registration</DialogTitle>
          <DialogDescription className="text-center">
            Fill out the form below to update marathon details.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleUpdatedRegistration}>
          <div className="flex gap-4">
            <div className="flex-1">
              <Label className="pl-2 py-2">Marathon Title</Label>
              <input
                name="title"
                type="text"
                defaultValue={marathonTitle}
                placeholder="Marathon Title"
                className="dark:border-gray-600 dark:bg-gray-900 w-full border pl-2 py-2 rounded"
                readOnly
              />
            </div>
            <div className="flex-1">
              <Label className="pl-2 py-2">Marathon Start Date</Label>
              <DatePicker
                selected={marathonStart}
                onChange={date => setMarathonStart(date)}
                className="dark:border-gray-600 dark:bg-gray-900 w-full border pl-2 py-2 rounded"
                placeholderText="Marathon Date"
                readOnly
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <Label className="pl-2 py-2">First Name</Label>
              <input
                name="firstName"
                type="text"
                defaultValue={firstName}
                placeholder="First Name"
                className="dark:border-gray-600 dark:bg-gray-900 w-full border pl-2 py-2 rounded"
                required
              />
            </div>
            <div className="w-1/2">
              <Label className="pl-2 py-2">Last Name</Label>
              <input
                name="lastName"
                type="text"
                defaultValue={lastName}
                placeholder="Last Name"
                className="dark:border-gray-600 dark:bg-gray-900 w-full border pl-2 py-2 rounded"
                required
              />
            </div>
          </div>

          <div className="w-full">
            <Label className="pl-2 py-2">Organizer Email</Label>
            <input
              name="userEmail"
              type="email"
              defaultValue={user?.email}
              readOnly
              className="dark:border-gray-600 dark:bg-gray-900 w-full border pl-2 py-2 rounded"
              required
            />
          </div>
          <div className="w-full">
            <Label className="pl-2 py-2">Contact Number</Label>
            <input
              name="contact"
              type="text"
              defaultValue={contact}
              className="dark:border-gray-600 dark:bg-gray-900 w-full border pl-2 py-2 rounded"
              required
            />
          </div>

          <div>
            <Label className="pl-2 py-2">Additional Info</Label>
            <textarea
              name="description"
              defaultValue={additionalInfo}
              rows="3"
              placeholder="Describe the ..additional Info"
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

export default RegistrationModal;
