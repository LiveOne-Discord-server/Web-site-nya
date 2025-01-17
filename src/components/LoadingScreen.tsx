import React from "react";
import { Loader } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#1A1F2C] flex items-center justify-center">
      <div className="text-center">
        <Loader className="w-16 h-16 text-secondary animate-spin mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white animate-pulse">Loading LiveOne...</h2>
      </div>
    </div>
  );
};

export default LoadingScreen;