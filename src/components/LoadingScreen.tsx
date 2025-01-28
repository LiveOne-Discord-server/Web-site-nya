import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import LavaLampBubbles from "./LavaLampBubbles";

const LoadingScreen = () => {
  const [progress, setProgress] = React.useState(0);
  const [typedKeys, setTypedKeys] = useState("");
  const [dots, setDots] = useState("");
  const [isExiting, setIsExiting] = useState(false);

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
        <div className="relative animate-fade-in">
          <LavaLampBubbles />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/80 text-lg font-semibold z-10 animate-pulse">
              {Math.round(progress)}%
            </span>
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