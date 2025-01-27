import React from 'react';

const LavaLampBubbles = () => {
  return (
    <div className="relative w-32 h-32">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`
            absolute rounded-full bg-gradient-to-br from-secondary to-primary
            animate-float opacity-80
          `}
          style={{
            width: `${Math.random() * 30 + 20}px`,
            height: `${Math.random() * 30 + 20}px`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default LavaLampBubbles;