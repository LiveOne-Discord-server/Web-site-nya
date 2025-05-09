import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, BookOpen } from "lucide-react";

const ForumTab = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const handleForumRedirect = () => {
    window.open("https://forum-liveone.vercel.app/", "_blank");
  };

  return (
    <div className="animate-fade-up space-y-6">
      <Card className="bg-black/50 backdrop-blur border-primary/20">
        <CardContent className="p-6 space-y-6 text-white/90">
          <h2 className="text-3xl font-semibold text-primary text-center">{t.forum.title}</h2>
          
          <p className="text-lg text-center mb-6">
            {t.forum.welcome}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <ForumCard 
              icon={<MessageSquare className="w-6 h-6 text-primary" />}
              title={t.forum.discussions.title}
              description={t.forum.discussions.description}
            />
            
            <ForumCard 
              icon={<Users className="w-6 h-6 text-primary" />}
              title={t.forum.community.title}
              description={t.forum.community.description}
            />
            
            <ForumCard 
              icon={<BookOpen className="w-6 h-6 text-primary" />}
              title={t.forum.guides.title}
              description={t.forum.guides.description}
            />
          </div>

          <div className="flex justify-center">
            <Button 
              onClick={handleForumRedirect}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              {t.forum.button}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ForumCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-4 bg-gray-800/50 backdrop-blur rounded-lg transition-all duration-300 hover:scale-105 hover:bg-primary/20">
    <div className="flex flex-col items-center text-center space-y-2">
      <div className="mb-2">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  </div>
);


export default ForumTab;