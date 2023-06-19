"use client"
import React from "react";

interface Client {
  name: string;
  companyName: string;
  logo: string;
  description: string;
}

interface CustomComponentProps {
  client: Client;
}

const CustomComponent: React.FC<CustomComponentProps> = ({ client }) => {
  const { name, companyName, logo, description } = client;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img src={logo} alt={`${companyName} logo`} className="w-16 h-16 mb-4" />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <h3 className="text-lg text-gray-500 mb-2">{companyName}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CustomComponent;
