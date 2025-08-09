import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contactImg from '../../assets/Lottie Files/undraw_email_b5yu.png';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())
    ) {
      newErrors.email = 'Invalid email address';
    }
    if (!form.message.trim()) newErrors.message = 'Message cannot be empty';
    return newErrors;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);

    // Simulate async form submission
    setTimeout(() => {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setIsSubmitting(false);

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="w-11/12 mx-auto py-20 px-4 sm:px-6">
      <title>Contact | EventStride</title>

      <h1 className="text-4xl my-6 text-center">Contact Us</h1>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          {
            icon: (
              <FaPhoneAlt className="text-[#c0122d] dark:text-yellow-300 w-8 h-8 mx-auto mb-3" />
            ),
            title: 'Phone',
            detail: '+1 (555) 123-4567',
          },
          {
            icon: (
              <FaEnvelope className="text-[#c0122d] dark:text-yellow-300 w-8 h-8 mx-auto mb-3" />
            ),
            title: 'Email',
            detail: 'support@eventstride.com',
          },
          {
            icon: (
              <FaMapMarkerAlt className="text-[#c0122d] dark:text-yellow-300 w-8 h-8 mx-auto mb-3" />
            ),
            title: 'Address',
            detail: '123 Marathon St, Runner City, USA',
          },
        ].map(({ icon, title, detail }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center border rounded-xl p-6 shadow hover:shadow-md transition duration-300 ease-in-out"
          >
            {icon}
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-lg">{detail}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
        {/* Left Info Section */}
        <div className="flex flex-col gap-y-4  border rounded-xl p-6 shadow hover:shadow-md transition duration-300 ease-in-out">
          <div className="space-y-4">
            <h2 className="text-4xl text-center font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <p className="text-center">
              Have questions or want to reach out? We&apos;re here to help!
            </p>
          </div>
          <img
            src={contactImg}
            alt="Contact Us Image"
            className="mt-6 md:mt-0 h-52 md:h-64 object-contain"
          />
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6 border rounded-xl p-6 shadow hover:shadow-md transition duration-300 ease-in-out"
        >
          {submitted && (
            <div
              className="p-4 mb-6 rounded shadow text-center font-semibold text-green-900 bg-green-200 animate-fadeIn"
              role="alert"
            >
              Thank you for your message! We will get back to you shortly.
            </div>
          )}
          <div>
            <label htmlFor="name" className="text-sm font-semibold">
              Full name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby="name-error"
              className={`w-full p-3 mt-1 rounded dark:bg-gray-100 dark:text-gray-900 transition-shadow duration-300 border ${
                errors.name
                  ? 'border-red-600 shadow-red-300 focus:border-red-600 focus:ring-red-600'
                  : 'border-gray-300 focus:border-[#c0122d] focus:ring-[#c0122d]'
              } focus:outline-none`}
            />
            {errors.name && (
              <p
                id="name-error"
                className="mt-1 text-red-600 text-sm font-medium"
                role="alert"
              >
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={form.email}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby="email-error"
              className={`w-full p-3 mt-1 rounded dark:bg-gray-100 dark:text-gray-900 transition-shadow duration-300 border ${
                errors.email
                  ? 'border-red-600 shadow-red-300 focus:border-red-600 focus:ring-red-600'
                  : 'border-gray-300 focus:border-[#c0122d] focus:ring-[#c0122d]'
              } focus:outline-none`}
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1 text-red-600 text-sm font-medium"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby="message-error"
              className={`w-full p-3 mt-1 rounded dark:bg-gray-100 dark:text-gray-900 transition-shadow duration-300 border resize-none ${
                errors.message
                  ? 'border-red-600 shadow-red-300 focus:border-red-600 focus:ring-red-600'
                  : 'border-gray-300 focus:border-[#c0122d] focus:ring-[#c0122d]'
              } focus:outline-none`}
            />
            {errors.message && (
              <p
                id="message-error"
                className="mt-1 text-red-600 text-sm font-medium"
                role="alert"
              >
                {errors.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-3 text-sm font-bold tracking-wide uppercase rounded ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                : 'bg-[#c0122d] hover:bg-[#9e0f22] dark:bg-yellow-300 dark:hover:bg-yellow-400 text-white dark:text-gray-900 transition-shadow shadow-md hover:shadow-lg'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="mt-20 text-center max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Prefer to browse marathons instead?{' '}
          <Link
            to="/marathons"
            className="text-[#c0122d] hover:underline font-semibold dark:text-yellow-300"
          >
            Explore Marathons
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Contact;
