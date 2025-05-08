import React, { useEffect } from "react";
import { useTranslation } from "@/contexts/LanguageContext";

const ForumTab = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Redirect to the forum website
    window.location.href = "https://forum-liveone.vercel.app/";
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <p className="text-lg text-center">{t("forum.redirecting", "Перенаправление на форум...")}</p>
    </div>
  );
};

export default ForumTab;