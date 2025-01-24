import React from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  language: "en" | "uk" | "ru";
  setLanguage: (lang: "en" | "uk" | "ru") => void;
}

const LanguageSwitcher = ({ language, setLanguage }: LanguageSwitcherProps) => {
  const nextLanguage: { [key: string]: "en" | "uk" | "ru" } = {
    en: "uk",
    uk: "ru",
    ru: "en"
  };

  const languageIcons: { [key: string]: string } = {
    en: "🇬🇧",
    uk: "🇺🇦",
    ru: "🇷🇺"
  };

  const handleLanguageChange = () => {
    setLanguage(nextLanguage[language]);
    console.log("Language changed to:", nextLanguage[language]);
  };

  return (
    <Button
      variant="outline"
      onClick={handleLanguageChange}
      className="flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-primary/10 active:scale-95 group"
    >
      <Globe className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
      <span className="animate-fade-in transition-all duration-300 transform hover:scale-110">
        {languageIcons[language]}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;