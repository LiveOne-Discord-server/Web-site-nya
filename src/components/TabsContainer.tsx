
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Info, ScrollText, Cat } from "lucide-react";
import HomeTab from "@/components/HomeTab";
import DescriptionTab from "@/components/DescriptionTab";
import RulesTab from "@/components/RulesTab";
import CatsTab from "@/components/CatsTab";
import TabContent from "@/components/TabContent";
import { cn } from "@/lib/utils";

interface TabsContainerProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  showCatsTab?: boolean;
}

const TabsContainer = ({ activeTab, onTabChange, showCatsTab }: TabsContainerProps) => {
  return (
    <div className="max-w-4xl mx-auto pt-12 relative z-10">
      <Tabs defaultValue="home" className="w-full" onValueChange={onTabChange}>
        <TabsList 
          className={cn(
            "grid mb-8 bg-gray-800/50 backdrop-blur rounded-full p-1 max-w-[350px] mx-auto",
            showCatsTab ? "grid-cols-4" : "grid-cols-3"
          )}
        >
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
          <TabsTrigger 
            value="rules" 
            className="rounded-full hover:scale-105 transition-all duration-300 data-[state=active]:bg-primary"
          >
            <ScrollText className="w-5 h-5 animate-fade-in" />
          </TabsTrigger>
          {showCatsTab && (
            <TabsTrigger 
              value="cats" 
              className="rounded-full hover:scale-105 transition-all duration-300 data-[state=active]:bg-primary"
            >
              <Cat className="w-5 h-5 animate-fade-in" />
            </TabsTrigger>
          )}
        </TabsList>

        <div className="relative min-h-[600px]">
          <TabContent isActive={activeTab === "home"}>
            <HomeTab />
          </TabContent>

          <TabContent isActive={activeTab === "description"}>
            <DescriptionTab />
          </TabContent>

          <TabContent isActive={activeTab === "rules"}>
            <RulesTab />
          </TabContent>

          {showCatsTab && (
            <TabContent isActive={activeTab === "cats"}>
              <CatsTab />
            </TabContent>
          )}
        </div>
      </Tabs>
    </div>
  );
};

export default TabsContainer;
