import React from "react";
import { Button } from "./ui/button";

const CatsTab = () => {
  const handleGotchaClick = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };

  return (
    <div className="relative min-h-[600px] flex items-center justify-center">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            animation: `bounce ${1 + Math.random()}s infinite ${Math.random()}s`,
          }}
        >
          🐱
        </div>
      ))}
      <Button
        onClick={handleGotchaClick}
        className="z-10 bg-primary hover:bg-primary/90 text-white px-8 py-4 text-xl"
      >
        Gotcha!
      </Button>
    </div>
  );
};

export default CatsTab;