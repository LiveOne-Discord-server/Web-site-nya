import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Info } from "lucide-react";
import HomeTab from "@/components/HomeTab";
import DescriptionTab from "@/components/DescriptionTab";
import TabContent from "@/components/TabContent";

interface TabsContainerProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const TabsContainer = ({ activeTab, onTabChange }: TabsContainerProps) => {
  return (
    <div className="max-w-4xl mx-auto pt-12 relative z-10">
      <Tabs defaultValue="home" className="w-full" onValueChange={onTabChange}>
        <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-800/50 backdrop-blur rounded-full p-1 max-w-[200px] mx-auto">
          <TabsTrigger 
            value="home" 
            className="rounded-full hover:scale-105 transition-all duration-300 data-[state=active]:bg-primary"
          >
            <Home className="w-5 h-5 animate-fade-in" />
          </TabsTrigger>
          <TabsTrigger 
            value="description" 
            className="rounded-full hover:scale-105 transition-all duration-300 data-[state=active]:bg-primary"
          >
            <Info className="w-5 h-5 animate-fade-in" />
          </TabsTrigger>
        </TabsList>

        <div className="relative min-h-[600px]">
          <TabContent isActive={activeTab === "home"}>
            <HomeTab />
          </TabContent>

          <TabContent isActive={activeTab === "description"}>
            <DescriptionTab />
          </TabContent>
        </div>
      </Tabs>
    </div>
  );
};

export default TabsContainer;