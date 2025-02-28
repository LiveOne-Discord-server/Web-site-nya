
import React from "react";
import { Youtube } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MorePeopleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MorePeopleDialog = ({ open, onOpenChange }: MorePeopleDialogProps) => {
  const [showRoomFbiLink, setShowRoomFbiLink] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-800 text-white animate-fade-up border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4 animate-fade-in">More Team Members</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300 hover:scale-105 transform cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">Ruslik_Suslik</h3>
            <p className="text-gray-300">Moderator of LiveOne Server</p>
          </div>
          <div className="relative p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300 hover:scale-105 transform cursor-pointer">
            {showRoomFbiLink && (
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-600/90 p-3 rounded-xl animate-fade-in before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:translate-y-1/2 before:border-8 before:border-transparent before:border-t-gray-600/90">
                <a
                  href="https://www.youtube.com/@roomfbi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-red-600 hover:bg-red-700 rounded-full transition-all hover:scale-110 inline-flex animate-pulse"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            )}
            <h3 
              className="text-xl font-semibold mb-2 cursor-pointer hover:text-secondary transition-colors"
              onClick={() => setShowRoomFbiLink(!showRoomFbiLink)}
            >
              RoomFbi
            </h3>
            <p className="text-gray-300">Deputy of Baner and creator of many tracks for him</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MorePeopleDialog;
