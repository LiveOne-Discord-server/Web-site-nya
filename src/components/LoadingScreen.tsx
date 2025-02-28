
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const colors = [
  "bg-primary",
  "bg-secondary",
  "bg-green-500",
  "bg-purple-500",
  "bg-yellow-500",
  "bg-red-500",
  "bg-blue-500",
];

const LoadingScreen = () => {
  const [progress, setProgress] = React.useState(0);
  const [typedKeys, setTypedKeys] = useState("");
  const [dots, setDots] = useState("");
  const [isExiting, setIsExiting] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  // Handle loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const increment = 100 / (7000 / 100); // Distribute 100% over 7 seconds
        const newProgress = oldProgress + increment;
        
        if (newProgress >= 100) {
          setIsExiting(true);
          clearInterval(interval);
          return 100;
        }
        
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Handle color change
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 700);

    return () => clearInterval(colorInterval);
  }, []);

  // Handle animated dots
  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length >= 3) return "";
        return prevDots + ".";
      });
    }, 500);

    return () => clearInterval(dotsInterval);
  }, []);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const newTypedKeys = typedKeys + event.key;
      setTypedKeys(newTypedKeys.slice(-5));

      if (newTypedKeys.toLowerCase().includes("baner")) {
        toast("OwO", {
          duration: 2000,
          className: "bg-secondary text-white",
          position: "top-center",
        });
        setTypedKeys("");
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [typedKeys]);

  return (
    <div 
      className={`fixed inset-0 bg-[#0A0A0F] flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
        isExiting ? "opacity-0" : "opacity-100"
      } z-[100]`}
    >
      <div className="relative w-80 flex flex-col items-center gap-8">
        <div className="w-24 h-24 flex items-center justify-center">
          <div 
            className={`w-16 h-16 rounded-full ${colors[colorIndex]} transition-all duration-300 animate-bounce shadow-lg`} 
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>
        
        <div className="w-full space-y-4 animate-fade-up">
          <Progress 
            value={progress} 
            className="h-2 transition-all duration-300"
          />
          <div className="text-center space-y-2">
            <p className="text-xl text-white/80 animate-pulse">
              Loading LiveOne{dots}
            </p>
            <p className="text-sm text-white/50">
              Try typing something while you wait...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
