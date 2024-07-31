import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Define the validation schema
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  phone: yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number must be digits only'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  description: yup.string().required('Description is required'),
});

const ContactForm = () => {
  const [messageSent, setMessageSent] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://formspree.io/f/mldrgvdq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessageSent(true);
        setTimeout(() => setMessageSent(false), 5000); // Hide notification after 5 seconds
        reset();
      } else {
        alert('Failed to send the message, please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred, please try again.');
    }
  };

  return (
    <div>
      {messageSent && (
        <div className="fixed top-4 right-4 bg-green-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg z-50">
          Message sent successfully!
        </div>
      )}
      <div className="flex flex-col md:flex-row mt-12">
        <div className="md:w-1/2 p-8 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Contact Address</h2>
          <p className="text-gray-700">123 Main Street,</p>
          <p className="text-gray-700">Springfield, USA</p>
          <p className="text-gray-700">Email: nadanalogaa@gmail.com</p>
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                {...register('name')}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                {...register('phone')}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                {...register('email')}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <textarea
                {...register('description')}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
              {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
