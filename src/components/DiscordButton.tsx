import React, { useState } from "react";
import confetti from "canvas-confetti";
import { useToast } from "@/hooks/use-toast";

const phrases = ["Let's go!", "Come have fun", "Click it!", "Be free"];

const DiscordButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const handleClick = () => {
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Show toast
    toast({
      title: "Redirecting to Discord",
      description: "See you there! 👋",
    });

    // Redirect to Discord
    window.open("https://discord.gg/FEyMjn3mtA", "_blank");
  };

  return (
    <div className="relative">
      {isHovered && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 animate-fade-in">
          <p className="text-secondary font-medium">
            {phrases[Math.floor(Math.random() * phrases.length)]}
          </p>
        </div>
      )}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-discord hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:animate-vibrate flex items-center gap-2 text-xl"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce"
        >
          <path
            d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.94-1.89-2.1s.84-2.1 1.89-2.1c1.06 0 1.9.95 1.89 2.1c0 1.16-.84 2.1-1.89 2.1zm6.97 0c-1.03 0-1.89-.94-1.89-2.1s.84-2.1 1.89-2.1c1.06 0 1.9.95 1.89 2.1c0 1.16-.83 2.1-1.89 2.1z"
            fill="currentColor"
          />
        </svg>
        LiveOne
      </button>
    </div>
  );
};

export default DiscordButton;