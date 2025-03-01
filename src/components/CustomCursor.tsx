
import React, { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we're on mobile device - don't show custom cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;
    
    // Set cursor visible after a small delay to ensure proper positioning
    setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const updateCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElements = [
        "button", "a", "input", "textarea", "select",
        "p", "h1", "h2", "h3", "h4", "h5", "h6", "div", "span"
      ];
      
      if (interactiveElements.includes(target.tagName.toLowerCase())) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Detect Chrome browser to apply specific cursor styles
    const isChrome = /chrome/i.test(navigator.userAgent) && /google inc/i.test(navigator.vendor);
    if (isChrome && document.body) {
      document.body.style.cursor = 'none';
    }

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      
      // Reset cursor style on cleanup
      if (document.body) {
        document.body.style.cursor = '';
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed w-8 h-8 pointer-events-none z-[9999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isHovering ? 0.8 : 1})`,
        opacity: isVisible ? 1 : 0,
        transition: 'transform 150ms ease, opacity 150ms ease',
      }}
    >
      <div
        className={`absolute inset-0 rounded-full transition-all duration-200 ${
          isHovering
            ? "bg-white/30 blur-md scale-150"
            : "bg-white/50 blur-sm scale-100"
        }`}
      />
      <div
        className={`absolute inset-0 rounded-full transition-all duration-200 ${
          isHovering ? "bg-white scale-75" : "bg-white/80"
        }`}
      />
    </div>
  );
};

export default React.memo(CustomCursor);
