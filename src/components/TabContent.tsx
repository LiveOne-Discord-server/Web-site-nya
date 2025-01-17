import React from "react";
import { cn } from "@/lib/utils";

interface TabContentProps {
  isActive: boolean;
  children: React.ReactNode;
}

const TabContent = ({ isActive, children }: TabContentProps) => {
  return (
    <div
      className={cn(
        "transition-all duration-300 absolute w-full",
        isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
      )}
    >
      {children}
    </div>
  );
};

export default TabContent;