"use client";
import React, { useState } from "react";

import {
  Activity,
  ArrowLeft,
  Check,
  Settings as SettingsIcon,
  Share2,
} from "lucide-react";
import Link from "next/link";
import { initAudio } from "../../utils/audio";
import { IConfig } from "../../models";
import { BouncingBall } from "../BouncingBall";
import { Settings } from "./Settings";
import { usePathname } from "I18n/routing";

export const MindSwingWidget = () => {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  const [config, setConfig] = useState<IConfig>({
    speed: 10,
    size: 80,
    color: "#3b82f6",
    trajectory: "h",
    soundType: "pop",
  });

  const generateShareUrl = () => {
    const params = new URLSearchParams();
    params.set("s", config.speed.toString());
    params.set("sz", config.size.toString());
    params.set("c", config.color.replace("#", ""));
    params.set("t", config.trajectory);
    params.set("snd", config.soundType);

    const url = `${window.location.origin}${pathname}/client?${params.toString()}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onConfigChange = (nextConfig: IConfig) => {
    setConfig(nextConfig);
    initAudio(); // Initialize audio on any interaction
  };

  return (
    <div className="flex h-screen w-full bg-gray-950 text-white font-sans overflow-hidden">
      <div className="w-80 bg-gray-900 border-r border-gray-800 p-6 flex flex-col gap-6 overflow-y-auto z-10 shadow-xl">
        <div>
          <Link
            href="/tools"
            className="text-gray-400 hover:text-white flex items-center gap-2 text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Tools
          </Link>
          <h1 className="text-xl font-semibold flex items-center gap-2 text-gray-100">
            <Activity className="w-5 h-5 text-indigo-400" />
            Mind Swing
          </h1>
        </div>
        <Settings config={config} onChange={onConfigChange} />
        <div className="mt-auto pt-6 border-t border-gray-800">
          <button
            onClick={generateShareUrl}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-colors font-medium"
          >
            {copied ? (
              <Check className="w-5 h-5" />
            ) : (
              <Share2 className="w-5 h-5" />
            )}
            {copied ? "Link Copied!" : "Copy Client Link"}
          </button>
          <p className="text-xs text-gray-500 mt-3 text-center leading-relaxed">
            Send this link to your client. They will see the animation
            full-screen.
          </p>
        </div>
      </div>
      <div className="flex-1 relative cursor-pointer" onClick={initAudio}>
        <BouncingBall {...config} isRunning={true} />
        <div className="absolute top-6 left-6 bg-gray-900/80 backdrop-blur text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-800 flex items-center gap-2 shadow-lg">
          <SettingsIcon className="w-4 h-4 text-gray-400" />
          Preview Mode
        </div>
      </div>
    </div>
  );
};
