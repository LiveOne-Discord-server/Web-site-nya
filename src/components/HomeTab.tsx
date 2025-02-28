
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
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import confetti from "canvas-confetti";

const HomeTab = () => {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const cookieDialog = document.getElementById("cookie-dialog");
    if (cookieDialog) {
      (cookieDialog as any).showModal();
    }
  }, []);

  const handleCookieResponse = () => {
    toast(t.home.cookieToast, {
      duration: 5000,
    });
  };

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { x, y },
      colors: ['#5865F2', '#9B87F5', '#6E57E0'],
      disableForReducedMotion: true,
    });
  };

  return (
    <div className="text-center">
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogTitle className="text-xl mb-4">
            {t.home.cookieTitle}
          </AlertDialogTitle>
          <AlertDialogFooter className="flex-col gap-2 sm:flex-col">
            <AlertDialogAction
              onClick={handleCookieResponse}
              className="w-full bg-primary hover:bg-primary/90"
            >
              {t.home.accept}
            </AlertDialogAction>
            <AlertDialogAction
              onClick={handleCookieResponse}
              className="w-full bg-secondary hover:bg-secondary/90"
            >
              {t.home.noChoice}
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
            <p className="text-lg text-gray-300">{t.home.catDialog}</p>
          </div>
        </DialogContent>
      </Dialog>

      <p className="text-xl text-gray-300 mb-12 animate-fade-up delay-200">
        {t.home.subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 animate-fade-up delay-300">
        <InfoCard 
          title={t.home.cards.open.title} 
          description={t.home.cards.open.description} 
          color="hover:bg-primary/20" 
          onHover={handleCardHover}
        />
        <InfoCard 
          title={t.home.cards.security.title} 
          description={t.home.cards.security.description} 
          color="hover:bg-secondary/20" 
          onHover={handleCardHover}
        />
        <InfoCard 
          title={t.home.cards.communication.title} 
          description={t.home.cards.communication.description} 
          color="hover:bg-green-500/20" 
          onHover={handleCardHover}
        />
        <InfoCard 
          title={t.home.cards.pies.title} 
          description={t.home.cards.pies.description} 
          color="hover:bg-purple-500/20" 
          onHover={handleCardHover}
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <DiscordButton />
        <SocialLinks />
        <p className="text-gray-400 mt-8">{t.home.footer}</p>
      </div>
    </div>
  );
};

const InfoCard = ({ 
  title, 
  description, 
  color, 
  onHover 
}: { 
  title: string; 
  description: string; 
  color: string; 
  onHover: (e: React.MouseEvent<HTMLDivElement>) => void 
}) => (
  <div 
    className={`p-6 bg-gray-800/50 backdrop-blur rounded-lg transition-all duration-300 hover:scale-105 hover:animate-vibrate ${color}`}
    onMouseEnter={onHover}
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default HomeTab;
