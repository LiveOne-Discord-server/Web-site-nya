
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { detectOS, OSType } from "@/lib/utils/detectOS";
import { useNavigate } from "react-router-dom";

const colors = [
  "bg-primary",
  "bg-secondary",
  "bg-green-500",
  "bg-purple-500",
  "bg-yellow-500",
  "bg-red-500",
  "bg-blue-500",
];

const LoadingScreen = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = React.useState(0);
  const [typedKeys, setTypedKeys] = useState("");
  const [dots, setDots] = useState("");
  const [isExiting, setIsExiting] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [os, setOS] = useState<OSType>("Unknown");
  const [showBSOD, setShowBSOD] = useState(false);
  const [linuxLogs, setLinuxLogs] = useState<string[]>([]);
  const [macMessage, setMacMessage] = useState("");

  // Detect OS on mount
  useEffect(() => {
    setOS(detectOS());
  }, []);

  // Generate Linux logs
  useEffect(() => {
    if (os === "Linux") {
      const logMessages = [
        "[    0.000000] Linux version 5.15.0-generic",
        "[    0.000001] Command line: BOOT_IMAGE=/boot/vmlinuz-5.15.0-generic",
        "[    0.000002] KERNEL supported cpus:",
        "[    0.000003]   Intel GenuineIntel",
        "[    0.000004]   AMD AuthenticAMD",
        "[    0.000005] Initializing cgroup subsys cpuset",
        "[    0.000006] Initializing cgroup subsys cpu",
        "[    0.000007] Initializing cgroup subsys cpuacct",
        "[    0.000008] Linux version 5.15.0-generic (LiveOne@kernel.org)",
        "[    0.000009] Detected 8 CPU cores",
        "[    0.000010] e820: BIOS-provided physical RAM map",
        "[    0.000011] ACPI: RSDP 0x00000000000F0490 000024 (v02 LIVEON)",
        "[    0.000012] ACPI: XSDT 0x00000000000F0490 000024 (v01 LIVEON)",
        "[    0.000013] ACPI: FACP 0x00000000000F0490 000024 (v01 LIVEON)",
        "[    0.000014] ACPI: DSDT 0x00000000000F0490 000024 (v01 LIVEON)",
        "[    0.000015] ACPI: APIC 0x00000000000F0490 000024 (v01 LIVEON)",
        "[    0.000016] ACPI: MCFG 0x00000000000F0490 000024 (v01 LIVEON)",
        "[    0.000017] ACPI: SSDT 0x00000000000F0490 000024 (v01 LIVEON)",
        "[    0.000018] Zone ranges:",
        "[    0.000019]   DMA      [mem 0x0000000000001000-0x0000000000ffffff]",
        "[    0.000020]   DMA32    [mem 0x0000000001000000-0x00000000ffffffff]",
        "[    0.000021]   Normal   [mem 0x0000000100000000-0x000000ff7fffffff]",
        "[    0.000022] Movable zone start for each node",
        "[    0.000023] Early memory node ranges",
        "[    0.000024] Initializing LiveOne Easter Egg...",
        "[    0.000025] Easter Egg initialized successfully",
        "[    0.000026] Redirecting to main page in 10 seconds..."
      ];

      const logInterval = setInterval(() => {
        setLinuxLogs(prev => {
          if (prev.length >= logMessages.length) {
            clearInterval(logInterval);
            // Redirect to home after 10 seconds
            setTimeout(() => {
              navigate("/");
            }, 10000);
            return prev;
          }
          return [...prev, logMessages[prev.length]];
        });
      }, 300);

      return () => clearInterval(logInterval);
    }
  }, [os, navigate]);

  // Handle Mac message typing effect
  useEffect(() => {
    if (os === "MacOS") {
      const fullMessage = "Загрузка на MacOS - это действительно лучший опыт! Перенаправление на главную страницу...";
      let index = 0;
      
      const typingInterval = setInterval(() => {
        if (index < fullMessage.length) {
          setMacMessage(prev => prev + fullMessage.charAt(index));
          index++;
        } else {
          clearInterval(typingInterval);
          // Redirect to home after 5 seconds
          setTimeout(() => {
            navigate("/");
          }, 5000);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [os, navigate]);

  // Handle loading progress for Windows
  useEffect(() => {
    if (os === "Windows") {
      const interval = setInterval(() => {
        setProgress((oldProgress) => {
          const increment = 100 / (7000 / 100); // Distribute 100% over 7 seconds
          const newProgress = oldProgress + increment;
          
          if (newProgress >= 60) {
            clearInterval(interval);
            setShowBSOD(true);
            // Redirect to home after 5 seconds of BSOD
            setTimeout(() => {
              navigate("/");
            }, 5000);
            return 60;
          }
          
          return newProgress;
        });
      }, 100);

      return () => clearInterval(interval);
    } else if (os === "Unknown") {
      // Default loading behavior for unknown OS
      const interval = setInterval(() => {
        setProgress((oldProgress) => {
          const increment = 100 / (7000 / 100);
          const newProgress = oldProgress + increment;
          
          if (newProgress >= 100) {
            setIsExiting(true);
            clearInterval(interval);
            setTimeout(() => {
              navigate("/");
            }, 1000);
            return 100;
          }
          
          return newProgress;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [os, navigate]);

  // Handle color change
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 700);

    return () => clearInterval(colorInterval);
  }, []);

  // Handle animated dots
  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length >= 3) return "";
        return prevDots + ".";
      });
    }, 500);

    return () => clearInterval(dotsInterval);
  }, []);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const newTypedKeys = typedKeys + event.key;
      setTypedKeys(newTypedKeys.slice(-5));

      if (newTypedKeys.toLowerCase().includes("baner")) {
        toast("OwO", {
          duration: 2000,
          className: "bg-secondary text-white",
          position: "top-center",
        });
        setTypedKeys("");
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [typedKeys]);

  // Render different loading screens based on OS
  if (os === "Windows" && showBSOD) {
    return (
      <div className="fixed inset-0 bg-blue-600 flex flex-col items-center justify-center overflow-hidden z-[100] p-8 text-white">
        <div className="max-w-2xl w-full space-y-6">
          <h1 className="text-4xl font-bold">:( Ваш компьютер столкнулся с проблемой</h1>
          <p className="text-xl">Причина: Обнаружена пасхалка LiveOne</p>
          <p className="text-lg">Перенаправление на главную страницу через 5 секунд...</p>
          <div className="mt-8">
            <p className="text-sm">Код ошибки: LIVE_ONE_EASTER_EGG</p>
          </div>
        </div>
      </div>
    );
  }

  if (os === "Linux") {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-start justify-start overflow-auto z-[100] p-4 text-green-400 font-mono">
        <div className="max-w-full w-full">
          {linuxLogs.map((log, index) => (
            <p key={index} className="text-sm whitespace-nowrap">{log}</p>
          ))}
        </div>
      </div>
    );
  }

  if (os === "MacOS") {
    return (
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center overflow-hidden z-[100] p-8 text-white">
        <div className="max-w-md w-full space-y-8 flex flex-col items-center">
          <svg className="w-24 h-24 text-white" viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-150.5-35.6-77.1 1.1-147.7 46.4-187.3 117.4-81.3 144.2-20.7 355.9 57.4 472.3 38.3 55.6 83.4 117.8 142.8 115.6 57.3-2.3 79-36.4 147.8-36.4 69.9 0 89.7 36.4 150.8 35.1 62.8-1.3 102.6-56.2 140.5-112.1 43.7-63.5 61.7-124.8 62.7-127.8-1.4-.6-120.4-47.3-121.5-188.6zm-121.8-349.2c31.5-40.1 52.5-95.4 46.5-151.1-45 2.5-99.2 30.3-130.9 68.3-28.2 32.6-53.9 86.7-46.7 137.4 49.5 4 100.9-24.4 131.1-54.6z" />
          </svg>
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-light">{macMessage}</h2>
          </div>
        </div>
      </div>
    );
  }

  // Default loading screen for Unknown OS
  return (
    <div 
      className={`fixed inset-0 bg-[#0A0A0F] flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
        isExiting ? "opacity-0" : "opacity-100"
      } z-[100]`}
    >
      <div className="relative w-80 flex flex-col items-center gap-8">
        <div className="w-24 h-24 flex items-center justify-center">
          <div 
            className={`w-16 h-16 rounded-full ${colors[colorIndex]} transition-all duration-300 animate-bounce shadow-lg`} 
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>
        
        <div className="w-full space-y-4 animate-fade-up">
          <Progress 
            value={progress} 
            className="h-2 transition-all duration-300"
          />
          <div className="text-center space-y-2">
            <p className="text-xl text-white/80 animate-pulse">
              Loading LiveOne{dots}
            </p>
            <p className="text-sm text-white/50">
              Try typing something while you wait...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
