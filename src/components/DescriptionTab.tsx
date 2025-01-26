import React, { useState } from "react";
import { Youtube, Github, Info, Users } from "lucide-react";
import { Button } from "./ui/button";
import confetti from "canvas-confetti";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LanguageSwitcher from "./rules/LanguageSwitcher";
import { translations } from "@/lib/translations";

const DescriptionTab = () => {
  const [showMarmurLinks, setShowMarmurLinks] = useState(false);
  const [showServerInfo, setShowServerInfo] = useState(false);
  const [showMorePeople, setShowMorePeople] = useState(false);
  const [language, setLanguage] = useState<"en" | "uk" | "ru">("en");
  const t = translations[language];
  const { toast } = useToast();

  const handleAsinaHover = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleBanerHover = () => {
    toast({
      title: "Meow! 🐱",
      description: "=^._.^= ∫",
      duration: 2000,
    });
  };

  const handleMarmurHover = () => {
    toast({
      description: <div className="animate-vibrate">🐱</div>,
      duration: 3000,
    });
  };

  return (
    <div className="space-y-6 text-center">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold">{t.team.title}</h2>
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>
      
      <div className="space-y-8">
        <div 
          className="p-6 bg-gray-800 rounded-lg hover:scale-105 transition-transform"
          onMouseEnter={handleBanerHover}
        >
          <h3 className="text-2xl font-semibold mb-2">
            <a
              href="https://banerone2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              Baner
            </a>
          </h3>
          <p className="text-gray-400">{t.team.baner}</p>
        </div>
        
        <div 
          className="relative p-6 bg-gray-800 rounded-lg hover:scale-105 transition-transform"
          onMouseEnter={handleMarmurHover}
        >
          {showMarmurLinks && (
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gray-700/90 p-4 rounded-2xl animate-fade-in before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:translate-y-1/2 before:border-8 before:border-transparent before:border-t-gray-700/90">
              <div className="flex gap-4">
                <a
                  href="https://youtube.com/@marmur_yt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-red-600 hover:bg-red-700 rounded-full transition-all hover:scale-110"
                >
                  <Youtube className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/Marmur2020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-600 hover:bg-gray-500 rounded-full transition-all hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          )}
          <h3 
            className="text-2xl font-semibold mb-2 cursor-pointer hover:text-secondary transition-colors"
            onClick={() => setShowMarmurLinks(!showMarmurLinks)}
          >
            Marmur
          </h3>
          <p className="text-gray-400">{t.team.marmur}</p>
        </div>

        <div 
          className="p-6 bg-gray-800 rounded-lg hover:scale-105 transition-transform group relative"
          onMouseEnter={handleAsinaHover}
        >
          <h3 className="text-2xl font-semibold mb-2 text-secondary">Asina</h3>
          <p className="text-gray-400">{t.team.asina}</p>
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <Button
          variant="outline"
          className="gap-2"
          onClick={() => setShowServerInfo(true)}
        >
          <Info className="w-4 h-4" />
          {t.serverInfo.buttonText}
        </Button>

        <Button
          variant="outline"
          className="gap-2 ml-4"
          onClick={() => setShowMorePeople(true)}
        >
          <Users className="w-4 h-4" />
          More people?
        </Button>

        <Dialog open={showServerInfo} onOpenChange={setShowServerInfo}>
          <DialogContent className="bg-gray-800 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-4">{t.serverInfo.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-gray-300">
                {t.serverInfo.content}
              </p>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={showMorePeople} onOpenChange={setShowMorePeople}>
          <DialogContent className="bg-gray-800 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-4">More Team Members</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Ruslik_Suslik</h3>
                <p className="text-gray-300">Moderator of LiveOne Server</p>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">RoomFbi</h3>
                <p className="text-gray-300">Deputy of Baner and creator of many tracks for him</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DescriptionTab;