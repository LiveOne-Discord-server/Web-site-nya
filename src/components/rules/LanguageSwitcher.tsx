import React from "react";
import { Button } from "@/components/ui/button";

interface LanguageSwitcherProps {
  language: "en" | "uk" | "ru";
  setLanguage: (lang: "en" | "uk" | "ru") => void;
}

const LanguageSwitcher = ({ language, setLanguage }: LanguageSwitcherProps) => {
  return (
    <div className="flex gap-2">
      <Button
        variant={language === "en" ? "default" : "secondary"}
        onClick={() => setLanguage("en")}
        className="transition-all duration-300"
      >
        🇬🇧
      </Button>
      <Button
        variant={language === "uk" ? "default" : "secondary"}
        onClick={() => setLanguage("uk")}
        className="transition-all duration-300"
      >
        🇺🇦
      </Button>
      <Button
        variant={language === "ru" ? "default" : "secondary"}
        onClick={() => setLanguage("ru")}
        className="transition-all duration-300"
      >
        🇷🇺
      </Button>
    </div>
  );
};

export default LanguageSwitcher;