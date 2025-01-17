import React from "react";
import { Youtube, Globe } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 justify-center mt-8">
      <a
        href="https://www.youtube.com/@BanLive"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
      >
        <Youtube size={20} />
        YouTube
      </a>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://banerone2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-secondary-hover text-white rounded-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
            >
              <Globe size={20} />
              Website
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>The creator of this site</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default SocialLinks;