import React from "react";
import { Cog } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const LoadingScreen = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#1A1F2C] flex items-center justify-center overflow-hidden">
      <div className="relative w-64 flex flex-col items-center gap-8">
        <Cog className="w-24 h-24 text-secondary animate-spin-slow" />
        <div className="w-full">
          <Progress value={progress} className="h-2" />
          <p className="text-xl text-white/80 animate-pulse mt-4">Loading LiveOne...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;