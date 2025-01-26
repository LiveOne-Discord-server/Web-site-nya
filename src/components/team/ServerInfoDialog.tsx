import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { translations } from "@/lib/translations";

interface ServerInfoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  language: "en" | "uk" | "ru";
}

const ServerInfoDialog = ({ open, onOpenChange, language }: ServerInfoDialogProps) => {
  const t = translations[language];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">{t.serverInfo.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-gray-300">
            {t.serverInfo.content}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServerInfoDialog;