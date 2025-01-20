import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import DiscordButton from "@/components/DiscordButton";
import SocialLinks from "@/components/SocialLinks";

const HomeTab = () => {
  return (
    <div className="text-center">
      <Dialog>
        <DialogTrigger>
          <h1 className="text-6xl font-bold mb-4 transition-all duration-500 hover:text-primary animate-fade-up">
            LiveOne
          </h1>
        </DialogTrigger>
        <DialogContent className="bg-[#1A1F2C] border-gray-700">
          <div className="text-center p-4">
            <img src="/kitty.png" alt="Sleepy kitty" className="mx-auto w-32 h-32 rounded-full mb-4" />
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