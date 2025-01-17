import React, { useState, useEffect, useCallback } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabContent from "@/components/TabContent";
import DiscordButton from "@/components/DiscordButton";
import SocialLinks from "@/components/SocialLinks";
import { Home, Info } from "lucide-react";
import Particles from "@tsparticles/react";
import { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showBlocks, setShowBlocks] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    setTimeout(() => setShowTitle(true), 2500);
    setTimeout(() => setShowSubtitle(true), 3000);
    setTimeout(() => setShowBlocks(true), 3500);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white p-4 relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
      />

      <div className="max-w-4xl mx-auto pt-12 relative z-10">
        <Tabs defaultValue="home" className="w-full" onValueChange={setActiveTab}>
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
              <div className="text-center">
                <h1
                  className={`text-6xl font-bold mb-4 transition-all duration-500 ${
                    showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  LiveOne
                </h1>
                <p
                  className={`text-xl text-gray-300 mb-12 transition-all duration-500 delay-300 ${
                    showSubtitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  An open and free Discord server
                </p>

                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 transition-all duration-500 ${
                    showBlocks ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="p-6 bg-gray-800/50 backdrop-blur rounded-lg hover:scale-105 transition-transform hover:animate-vibrate">
                    <h3 className="text-xl font-semibold mb-2">Open</h3>
                    <p>We try not to be cruel and treat mostly calmly</p>
                  </div>
                  <div className="p-6 bg-gray-800/50 backdrop-blur rounded-lg hover:scale-105 transition-transform hover:animate-vibrate">
                    <h3 className="text-xl font-semibold mb-2">Security</h3>
                    <p>Our server does not steal data....just we have no one to sell 0w0</p>
                  </div>
                  <div className="p-6 bg-gray-800/50 backdrop-blur rounded-lg hover:scale-105 transition-transform hover:animate-vibrate">
                    <h3 className="text-xl font-semibold mb-2">Communication</h3>
                    <p>Our server gives the right to communicate in your language, which is easier for you</p>
                  </div>
                  <div className="p-6 bg-gray-800/50 backdrop-blur rounded-lg hover:scale-105 transition-transform hover:animate-vibrate">
                    <h3 className="text-xl font-semibold mb-2">Pies</h3>
                    <p>Pies ?.... wrong I guess</p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-8">
                  <DiscordButton />
                  <SocialLinks />
                  <p className="text-gray-400 mt-8">LiveOne Nyam Free and Simple Server</p>
                </div>
              </div>
            </TabContent>

            <TabContent isActive={activeTab === "description"}>
              <div className="space-y-6 text-center">
                <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
                <div className="space-y-8">
                  <div className="p-6 bg-gray-800 rounded-lg hover:scale-105 transition-transform">
                    <h3 className="text-2xl font-semibold mb-2">
                      <a
                        href="https://banerone2.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-secondary transition-colors"
                      >
                        Baner
                      </a>
                    </h3>
                    <p className="text-gray-400">Not the Owner (but still awesome!)</p>
                  </div>
                  <div className="p-6 bg-gray-800 rounded-lg hover:scale-105 transition-transform">
                    <div className="flex justify-center gap-4 mb-4">
                      <a
                        href="https://youtube.com/@marmur_yt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-red-600 hover:bg-red-700 rounded-full transition-all hover:scale-110"
                      >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                      <a
                        href="https://github.com/Marmur2020"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-all hover:scale-110"
                      >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                      </a>
                    </div>
                    <h3 className="text-2xl font-semibold">Marmur</h3>
                    <p className="text-gray-400">Also Not the Owner (and that's okay!)</p>
                  </div>
                  <div className="p-6 bg-gray-800 rounded-lg hover:scale-105 transition-transform group relative">
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-gray-900 p-4 rounded-lg">
                      I just exist....0w0
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-secondary">Asina</h3>
                    <p className="text-gray-400">Owner of LiveOne ✨</p>
                  </div>
                </div>
              </div>
            </TabContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
