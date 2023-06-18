import React from 'react';

interface SubscriptionSwitchProps {
  isAnnual: boolean;
  onToggle: () => void;
}

const SubscriptionSwitch: React.FC<SubscriptionSwitchProps> = ({ isAnnual, onToggle }) => {
  return (
    <div className="flex items-center">
      <span className="mr-2">Monthly</span>
      <label className="switch">
        <input type="checkbox" onChange={onToggle} checked={isAnnual} />
        <span className="slider round"></span>
      </label>
      <span className="ml-2">Annual</span>
    </div>
  );
};

export default SubscriptionSwitch;
