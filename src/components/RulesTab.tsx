import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import LanguageSwitcher from "./rules/LanguageSwitcher";
import CommunicationSection from "./rules/CommunicationSection";
import ResponsibilitySection from "./rules/ResponsibilitySection";
import ConsequencesSection from "./rules/ConsequencesSection";
import { translations } from "@/lib/translations";

const RulesTab = () => {
  const [language, setLanguage] = useState<"en" | "uk" | "ru">("en");
  const t = translations[language];

  return (
    <div className="animate-fade-up">
      <Card className="bg-black/50 backdrop-blur border-primary/20">
        <CardContent className="p-6 space-y-6 text-white/90">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-primary">{t.title}</h2>
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </div>
          
          <p className="italic text-white/80 mb-8">
            {t.agreement}
          </p>

          <section className="space-y-6">
            <CommunicationSection t={t} />
            <ResponsibilitySection t={t} />

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">{t.developers.title}</h3>
              <p>{t.developers.content}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">{t.advertising.title}</h3>
              <p>{t.advertising.content}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">{t.important.title}</h3>
              <p className="flex gap-2 hover:bg-primary/10 p-2 rounded-lg transition-all duration-300 transform hover:translate-x-2">
                <span>⚖️</span>
                <span>
                  <span className="font-semibold">{t.important.compliance.title}</span>{" "}
                  {t.important.compliance.content}
                </span>
              </p>
            </div>

            <ConsequencesSection t={t} />
          </section>

          <p className="text-white/80 italic mt-8">
            {t.footer}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RulesTab;