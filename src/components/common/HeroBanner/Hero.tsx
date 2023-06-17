"use client"
import React from "react";

interface HeroProps {
  backgroundImage?: string;
  gradientColor?: string;
  children: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  gradientColor,
  children,
}) => {
  const heroStyle: React.CSSProperties = {};

  if (backgroundImage) {
    heroStyle.backgroundImage = `url(${backgroundImage})`;
  }

  if (gradientColor) {
    heroStyle.backgroundImage = gradientColor;
  }

  return (
    <div className="hero" style={heroStyle}>
      {children}
    </div>
  );
};

export default Hero;
