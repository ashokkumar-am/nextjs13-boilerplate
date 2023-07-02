import React from "react";
import Image from "next/image";

interface HeroProps {
  title: string;
  image: string;
}

const Hero = ({ title, image }: HeroProps) => {
  return (
    <div className="relative">
      <Image
        src={image}
        alt="Hero Image"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative">
        <h1 className="text-4xl font-bold mb-4 text-white">{title}</h1>
        <p className="text-lg text-white">
          Discover amazing heroes and their incredible stories!
        </p>
      </div>
    </div>
  );
};

export default Hero;
