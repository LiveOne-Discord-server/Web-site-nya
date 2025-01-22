import React from "react";

interface ResponsibilitySectionProps {
  t: any;
}

const ResponsibilitySection = ({ t }: ResponsibilitySectionProps) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-primary mb-4">{t.responsibility.title}</h3>
      <ul className="space-y-4">
        <li className="flex gap-2 hover:bg-primary/10 p-2 rounded-lg transition-all duration-300 transform hover:translate-x-2">
          <span>🏨</span>
          <p>
            <span className="font-semibold">{t.responsibility.pms.title}</span>{" "}
            {t.responsibility.pms.content}
          </p>
        </li>
        <li className="flex gap-2 hover:bg-primary/10 p-2 rounded-lg transition-all duration-300 transform hover:translate-x-2">
          <span>💾</span>
          <p>
            <span className="font-semibold">{t.responsibility.security.title}</span>{" "}
            {t.responsibility.security.content}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ResponsibilitySection;