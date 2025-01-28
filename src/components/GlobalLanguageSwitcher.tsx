import React from "react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const GlobalLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = {
    en: "🇬🇧",
    uk: "🇺🇦",
    ru: "🇷🇺",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="fixed top-4 right-4 z-50">
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([code, flag]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code as "en" | "uk" | "ru")}
            className={`text-lg ${language === code ? "bg-primary/10" : ""}`}
          >
            {flag}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GlobalLanguageSwitcher;