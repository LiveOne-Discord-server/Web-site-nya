import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import DiscordButton from "@/components/DiscordButton";
import SocialLinks from "@/components/SocialLinks";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

const HomeTab = () => {
  useEffect(() => {
    // Show cookie consent dialog on mount
    const cookieDialog = document.getElementById("cookie-dialog");
    if (cookieDialog) {
      (cookieDialog as any).showModal();
    }
  }, []);

  const handleCookieResponse = () => {
    toast("Sorry, we don't actually have any cookies... can't eat them without tea anyway! 🍪", {
      duration: 5000,
    });
  };

  return (
    <div className="text-center">
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogTitle className="text-xl mb-4">
            Would you like to accept our cookies? 🍪
          </AlertDialogTitle>
          <AlertDialogFooter className="flex-col gap-2 sm:flex-col">
            <AlertDialogAction
              onClick={handleCookieResponse}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Accept
            </AlertDialogAction>
            <AlertDialogAction
              onClick={handleCookieResponse}
              className="w-full bg-secondary hover:bg-secondary/90"
            >
              No choice, I will accept
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog>
        <DialogTrigger>
          <h1 className="text-6xl font-bold mb-4 transition-all duration-500 hover:text-primary animate-fade-up">
            LiveOne
          </h1>
        </DialogTrigger>
        <DialogContent className="bg-[#1A1F2C] border-gray-700">
          <div className="text-center p-4">
            <div className="relative w-48 h-48 mx-auto mb-4">
              {/* Cat illustration */}
              <div className="absolute inset-0">
                <div className="relative w-32 h-32 mx-auto">
                  {/* Cat head */}
                  <div className="absolute w-32 h-24 bg-gray-700 rounded-full bottom-0"></div>
                  {/* Ears */}
                  <div className="absolute w-0 h-0 left-2 -top-2
                    border-l-[20px] border-l-transparent
                    border-b-[40px] border-b-gray-700
                    border-r-[20px] border-r-transparent">
                  </div>
                  <div className="absolute w-0 h-0 right-2 -top-2
                    border-l-[20px] border-l-transparent
                    border-b-[40px] border-b-gray-700
                    border-r-[20px] border-r-transparent">
                  </div>
                  {/* Eyes */}
                  <div className="absolute w-4 h-4 bg-yellow-400 rounded-full left-8 top-12"></div>
                  <div className="absolute w-4 h-4 bg-yellow-400 rounded-full right-8 top-12"></div>
                  {/* Nose */}
                  <div className="absolute w-3 h-2 bg-pink-300 rounded-full left-1/2 top-16 -translate-x-1/2"></div>
                  {/* Whiskers */}
                  <div className="absolute w-12 h-0.5 bg-gray-500 left-0 top-16 -rotate-12"></div>
                  <div className="absolute w-12 h-0.5 bg-gray-500 right-0 top-16 rotate-12"></div>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-300">Meow...who are you.... please don't touch me, I want to sleep</p>
          </div>
        </DialogContent>
      </Dialog>

      <p className="text-xl text-gray-300 mb-12 animate-fade-up delay-200">
        An open and free Discord server
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 animate-fade-up delay-300">
        <InfoCard title="Open" description="We try not to be cruel and treat mostly calmly" color="hover:bg-primary/20" />
        <InfoCard title="Security" description="Our server does not steal data....just we have no one to sell 0w0" color="hover:bg-secondary/20" />
        <InfoCard title="Communication" description="Our server gives the right to communicate in your language, which is easier for you" color="hover:bg-green-500/20" />
        <InfoCard title="Pies" description="Pies ?.... wrong I guess" color="hover:bg-purple-500/20" />
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <DiscordButton />
        <SocialLinks />
        <p className="text-gray-400 mt-8">LiveOne Nyam Free and Simple Server</p>
      </div>
    </div>
  );
};

const InfoCard = ({ title, description, color }: { title: string; description: string; color: string }) => (
  <div className={`p-6 bg-gray-800/50 backdrop-blur rounded-lg transition-all duration-300 hover:scale-105 hover:animate-vibrate ${color}`}>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default HomeTab;