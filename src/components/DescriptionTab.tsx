import React, { useState } from "react";
import { Info, Users } from "lucide-react";
import { Button } from "./ui/button";
import confetti from "canvas-confetti";
import { useToast } from "@/hooks/use-toast";
import { translations } from "@/lib/translations";
import TeamMember from "./team/TeamMember";
import MorePeopleDialog from "./team/MorePeopleDialog";
import ServerInfoDialog from "./team/ServerInfoDialog";
import { useLanguage } from "@/contexts/LanguageContext";

const DescriptionTab = () => {
  const [showServerInfo, setShowServerInfo] = useState(false);
  const [showMorePeople, setShowMorePeople] = useState(false);
  const { language } = useLanguage();
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
      <h2 className="text-4xl font-bold">{t.team.title}</h2>
      
      <div className="space-y-8">
        <TeamMember
          name="Baner"
          description={t.team.baner}
          onMouseEnter={handleBanerHover}
        />
        
        <TeamMember
          name="Marmur"
          description={t.team.marmur}
          onMouseEnter={handleMarmurHover}
          socialLinks={{
            youtube: "https://youtube.com/@marmur_yt",
            github: "https://github.com/Marmur2020"
          }}
        />

        <TeamMember
          name="Asina"
          description={t.team.asina}
          onMouseEnter={handleAsinaHover}
          className="group"
        />
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

        <ServerInfoDialog 
          open={showServerInfo} 
          onOpenChange={setShowServerInfo}
          language={language}
        />

        <MorePeopleDialog 
          open={showMorePeople} 
          onOpenChange={setShowMorePeople}
        />
      </div>
    </div>
  );
};

export default DescriptionTab;