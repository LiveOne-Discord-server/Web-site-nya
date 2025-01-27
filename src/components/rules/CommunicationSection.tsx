import React from "react";

interface CommunicationSectionProps {
  t: any;
}

const CommunicationSection = ({ t }: CommunicationSectionProps) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-black mb-4">{t.communication.title}</h3>
      <ul className="space-y-4">
        <li className="flex gap-2 hover:bg-primary/10 p-2 rounded-lg transition-all duration-300 transform hover:translate-x-2">
          <span>💬</span>
          <p>
            <span className="font-semibold">{t.communication.respectful.title}</span>{" "}
            {t.communication.respectful.content}
          </p>
        </li>
        <li className="flex gap-2 hover:bg-primary/10 p-2 rounded-lg transition-all duration-300 transform hover:translate-x-2">
          <span>💿</span>
          <p>
            <span className="font-semibold">{t.communication.questions.title}</span>{" "}
            {t.communication.questions.content}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default CommunicationSection;
