import React from "react";
import { Youtube, Github } from "lucide-react";

interface TeamMemberProps {
  name: string;
  description: string;
  onMouseEnter?: () => void;
  socialLinks?: {
    youtube?: string;
    github?: string;
  };
  className?: string;
}

const TeamMember = ({ 
  name, 
  description, 
  onMouseEnter,
  socialLinks,
  className = "" 
}: TeamMemberProps) => {
  const [showLinks, setShowLinks] = React.useState(false);

  return (
    <div 
      className={`relative p-6 bg-gray-800 rounded-lg hover:scale-105 transition-transform ${className}`}
      onMouseEnter={onMouseEnter}
    >
      {showLinks && socialLinks && (
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gray-700/90 p-4 rounded-2xl animate-fade-in before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:translate-y-1/2 before:border-8 before:border-transparent before:border-t-gray-700/90">
          <div className="flex gap-4">
            {socialLinks.youtube && (
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-red-600 hover:bg-red-700 rounded-full transition-all hover:scale-110"
              >
                <Youtube className="w-6 h-6" />
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-600 hover:bg-gray-500 rounded-full transition-all hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      )}
      <h3 
        className={`text-2xl font-semibold mb-2 ${socialLinks ? 'cursor-pointer hover:text-secondary transition-colors' : ''}`}
        onClick={() => socialLinks && setShowLinks(!showLinks)}
      >
        {name}
      </h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default TeamMember;