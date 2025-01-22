import React from "react";

interface ConsequencesSectionProps {
  t: any;
}

const ConsequencesSection = ({ t }: ConsequencesSectionProps) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-primary mb-4">{t.consequences.title}</h3>
      <p className="mb-4">{t.consequences.content}</p>
      <ul className="space-y-2 list-disc pl-6">
        {t.consequences.list.map((item: any, index: number) => (
          <li key={index}>
            <span className="font-semibold">{item.title}</span> – {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsequencesSection;