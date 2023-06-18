"use client"
import React, { useState } from 'react';
import SubscriptionSwitch from './SubscriptionSwitch';

interface PricingTagProps {
  title: string;
  price: string;
  monthlyPrice: string;
  annualPrice: string;
  details: string[];
}

const PricingTag: React.FC<PricingTagProps> = ({ title, price, monthlyPrice, annualPrice, details }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleSwitchToggle = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="text-4xl font-bold mt-4">{isAnnual ? annualPrice : monthlyPrice}</div>
      <div className="text-gray-500 mt-2">{isAnnual ? 'Per year' : 'Per month'}</div>
      <SubscriptionSwitch isAnnual={isAnnual} onToggle={handleSwitchToggle} />
      <ul className="mt-4">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M2.929 6.414l1.414-1.414L8 9.586l6.657-6.656 1.414 1.414L8 12.414 2.929 7.343l-.708.708z"
                clipRule="evenodd"
              />
            </svg>
            {detail}
          </li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Subscribe</button>
    </div>
  );
};

export default PricingTag;
