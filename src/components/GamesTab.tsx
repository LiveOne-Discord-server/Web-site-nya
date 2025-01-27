import React from "react";
import { Progress } from "@/components/ui/progress";
import { Box, Target, Shield, Crosshair, Gamepad2 } from "lucide-react";
import LanguageSwitcher from "./rules/LanguageSwitcher";
import { translations } from "@/lib/translations";
import { useState } from "react";

const GamesTab = () => {
  const [language, setLanguage] = useState<"en" | "uk" | "ru">("en");
  const t = translations[language];

  const games = [
    {
      name: "Minecraft",
      percentage: 86,
      icon: Box,
      color: "bg-green-500",
    },
    {
      name: "Fortnite",
      percentage: 4,
      icon: Target,
      color: "bg-purple-500",
    },
    {
      name: "World of Tanks",
      percentage: 2,
      icon: Shield,
      color: "bg-yellow-500",
    },
    {
      name: "CS GO 2",
      percentage: 6,
      icon: Crosshair,
      color: "bg-red-500",
    },
    {
      name: t.games.others,
      percentage: 2,
      icon: Gamepad2,
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-8 p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-center animate-fade-up">
          {t.games.title}
        </h2>
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>
      <div className="space-y-6">
        {games.map((game, index) => (
          <div
            key={game.name}
            className="animate-fade-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center gap-4 mb-2">
              <div className={`p-2 rounded-lg ${game.color} animate-float`}>
                <game.icon className="w-6 h-6 text-white" />
              </div>
              <span className="font-medium">{game.name}</span>
              <span className="ml-auto font-bold">{game.percentage}{t.games.percentage}</span>
            </div>
            <Progress
              value={game.percentage}
              className="h-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesTab;