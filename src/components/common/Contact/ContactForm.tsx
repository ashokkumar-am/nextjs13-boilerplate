"use client";

import { useForm, UseFormRegister, FieldValues } from "react-hook-form";
import Joi, { ValidationResult } from "joi";
import { useState } from "react";
import useSWR from "swr";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  mobile: Joi.string().required(),
  message: Joi.string().required(),
});

const ContactForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    const { error }: ValidationResult = schema.validate(data);

    if (error) {
      alert(error.details[0].message);
      return;
    }

    // Post form data to API
    await fetch("/api/v1/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    // Invalidate cache to trigger SWR revalidation
    mutate("/api/v1/contact");

    setIsSuccess(true);
  };

  const { mutate } = useSWR("/api/v1/contact");

  return (
    <div className="max-w-md mx-auto">
      {isSuccess ? (
        <p className="bg-green-200 text-green-800 p-4 mb-4 rounded">
          Message sent successfully!
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block mb-2">
              Mobile Number:
            </label>
            <input
              type="tel"
              id="mobile"
              {...register("mobile", { required: true })}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            {errors.mobile && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message:
            </label>
            <textarea
              id="message"
              {...register("message", { required: true })}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            ></textarea>
            {errors.message && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;

// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string().required('Email is required').email('Email is invalid'),
//   message: Yup.string().required('Message is required'),
// });

// const ContactForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<FormData>({
//     resolver: yupResolver(validationSchema),
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // const onSubmit = (data: FormData) => {
//   //   console.log('Form submitted successfully', data);
//   //   setIsSubmitted(true);
//   //   reset();
//   // };

//   const [submitting, setSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState<string | null>(null);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const onSubmit = async (data: FormData) => {
//     setSubmitting(true);
//     setSubmitError(null);

//     const { error } = formState.validate(data);

//     if (error) {
//       setSubmitError(error.details[0].message);
//       setSubmitting(false);
//       return;
//     }

//     try {
//       await axios.post('/api/contact', data);
//       setSubmitSuccess(true);
//       reset();
//     } catch (error) {
//       setSubmitError('An error occurred while submitting the form.');
//     } finally {
//       setSubmitting(false);
//     }
//   };
//   return (
//     <div className="max-w-md mx-auto">
//       {isSubmitted ? (
//         <p className="text-green-500 text-center mb-4">
//           Form submitted successfully!
//         </p>
//       ) : (
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block mb-1">
//               Name:
//             </label>
//             <input
//               type="text"
//               id="name"
//             //   className="w-full border border-gray-300 rounded py-2 px-3"
//               {...register('name')}
//             />
//             {errors.name && (
//               <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
//             )}
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block mb-1">
//               Email:
//             </label>
//             <input
//               type="email"
//               id="email"
//             //   className="w-full border border-gray-300 rounded py-2 px-3"
//               {...register('email')}
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
//             )}
//           </div>
//           <div className="mb-4">
//             <label htmlFor="message" className="block mb-1">
//               Message:
//             </label>
//             <textarea
//               id="message"
//               className="w-full border border-gray-300 rounded py-2 px-3"
//               {...register('message')}
//             ></textarea>
//             {errors.message && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.message.message}
//               </p>
//             )}
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//           >
//             Submit
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default ContactForm;
