"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useSWR from "swr";

// Define validation schema using yup
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

interface FormData {
  email: string;
}

const NewsletterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    // Perform submit logic, such as making an API request
    const response = await fetch("/api/v1/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmitted(true);
      reset();
    }
  };
  const { data: subscriptionData } = useSWR("/api/v1/subscription-status", (url:any) =>
    fetch(url).then((response) => response.json())
  );

  const isSubscribed = subscriptionData?.subscribed || false;

  return (
    <div className=" bg-blue-50 bg-center h-80 flex items-center ">
      <div className="w-full max-w-sm mx-auto p-4 bg-white rounded-lg shadow">
        {submitted ? (
          <p className="text-green-600 text-center mb-4">
            Subscription successful!
          </p>
        ) : (
          <>
            <h1 className="text-2xl text-center mb-4">
              Subscribe to our Newsletter
            </h1>
            {isSubscribed ? (
              <p className="text-blue-600 text-center mb-4">
                You are already subscribed!
              </p>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  className={`w-full p-2 mb-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mb-2">
                    {errors.email.message}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
