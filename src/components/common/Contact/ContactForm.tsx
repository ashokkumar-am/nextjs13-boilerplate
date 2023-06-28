"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    // e.preventDefault();
    setSubmitting(true);
    try {
      console.log("API Calling Contact");
      const response = await fetch("/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.error("Failed to submit form.");
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }

    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Email" className="block mb-2">
          Email:
        </label>
        <input
          type="text"
          id="email"
          className="border border-gray-300 rounded px-3 py-6 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Email" className="block mb-2">
          Message:
        </label>
        <input
          type="text"
          id="message"
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>
      <button
        className="border border-gray-300 rounded px-3 py-2 w-full hover:border-blue-500 text-blue-900"
        type="submit"
        disabled={submitting}
      >
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
