import React, { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import MovingParticlesBackground from "@/components/MovingParticlesBackground";
import TabsContainer from "@/components/TabsContainer";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-transparent text-white p-4 relative overflow-y-auto">
      <MovingParticlesBackground />
      <TabsContainer activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;