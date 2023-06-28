import React from "react";

interface HeroProps {
  title: string;
}

const Hero = ({ title }: HeroProps) => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
        <p className="mt-4 text-lg">{title}</p>
      </div>
    </div>
  );
};

export default Hero;
