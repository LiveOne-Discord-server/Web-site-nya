import React, { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import MovingParticlesBackground from "@/components/MovingParticlesBackground";
import TabsContainer from "@/components/TabsContainer";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [typedKeys, setTypedKeys] = useState("");
  const [virusAlert, setVirusAlert] = useState(false);
  const [showCatsTab, setShowCatsTab] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Add a small delay before showing content for smooth transition
      setTimeout(() => setContentVisible(true), 500);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const newTypedKeys = typedKeys + event.key;
      setTypedKeys(newTypedKeys.slice(-6));

      if (newTypedKeys.toLowerCase().includes("baner")) {
        toast("Пасхалка ещё не готова... приходите позже 🥚", {
          duration: 3000,
        });
        setTypedKeys("");
      }

      if (newTypedKeys.toLowerCase().includes("virus")) {
        setVirusAlert(true);
        setTimeout(() => {
          window.location.reload();
        }, 10000);
        setTypedKeys("");
      }

      if (newTypedKeys.toLowerCase().includes("marmur")) {
        setShowCatsTab(true);
        setActiveTab("cats");
        toast("Мяу! Котики появились! 🐱", {
          duration: 3000,
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
    <div className="min-h-screen bg-transparent text-white p-4 relative overflow-y-auto">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <MovingParticlesBackground />
          <div 
            className={`transition-all duration-1000 transform ${
              contentVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-4"
            }`}
          >
            <TabsContainer 
              activeTab={activeTab} 
              onTabChange={setActiveTab} 
              showCatsTab={showCatsTab}
            />
          </div>
          
          <AlertDialog open={virusAlert} onOpenChange={setVirusAlert}>
            <AlertDialogContent className="animate-vibrate bg-red-500 border-red-700">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl text-white text-center">
                  ⚠️ ВНИМАНИЕ! ОБНАРУЖЕН ВИРУС! ⚠️
                </AlertDialogTitle>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )}
    </div>
  );
};

export default Index;