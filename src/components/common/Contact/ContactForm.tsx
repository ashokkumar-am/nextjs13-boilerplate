"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log('Form submitted successfully', data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="max-w-md mx-auto">
      {isSubmitted ? (
        <p className="text-green-500 text-center mb-4">
          Form submitted successfully!
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
            //   className="w-full border border-gray-300 rounded py-2 px-3"
              {...register('name')}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
            //   className="w-full border border-gray-300 rounded py-2 px-3"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1">
              Message:
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded py-2 px-3"
              {...register('message')}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
