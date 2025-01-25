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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const newTypedKeys = typedKeys + event.key;
      setTypedKeys(newTypedKeys.slice(-5)); // Keep only last 5 characters

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
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [typedKeys]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-transparent text-white p-4 relative overflow-y-auto">
      <MovingParticlesBackground />
      <TabsContainer activeTab={activeTab} onTabChange={setActiveTab} />
      
      <AlertDialog open={virusAlert} onOpenChange={setVirusAlert}>
        <AlertDialogContent className="animate-vibrate bg-red-500 border-red-700">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl text-white text-center">
              ⚠️ ВНИМАНИЕ! ОБНАРУЖЕН ВИРУС! ⚠️
            </AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Index;