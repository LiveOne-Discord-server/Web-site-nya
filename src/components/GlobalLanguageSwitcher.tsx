
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import confetti from "canvas-confetti";

const GlobalLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isRotating, setIsRotating] = useState(false);

  const languages = {
    en: "🇬🇧",
    uk: "🇺🇦",
    ru: "🇷🇺",
  };

  const handleLanguageChange = (code: "en" | "uk" | "ru") => {
    if (language !== code) {
      setLanguage(code);
      
      // Trigger confetti when language changes
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.2, x: 0.9 }, // Position near the language button
        colors: ['#5865F2', '#9B87F5', code === 'en' ? '#012169' : code === 'uk' ? '#0057B7' : '#D52B1E'],
        zIndex: 9999,
      });

      // Animate the globe icon
      setIsRotating(true);
      setTimeout(() => setIsRotating(false), 1000);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className={`fixed top-4 right-4 z-50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 bg-gray-800/70 backdrop-blur-sm border-gray-700 ${isRotating ? 'rotate-180' : ''}`}
        >
          <Globe className={`h-4 w-4 text-primary ${isRotating ? 'animate-spin' : 'animate-pulse'}`} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-800/80 backdrop-blur border-gray-700 animate-fade-in">
        {Object.entries(languages).map(([code, flag]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code as "en" | "uk" | "ru")}
            className={`
              text-2xl p-2 hover:scale-125 transition-all duration-300 flex justify-center
              ${language === code ? "bg-primary/20 rounded-full" : ""}
            `}
          >
            <span className={`transform transition-all duration-500 ${language === code ? "scale-125" : "scale-100"}`}>
              {flag}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GlobalLanguageSwitcher;
