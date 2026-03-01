"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { initAudio } from "../utils/audio";
import { Play } from "lucide-react";
import { BouncingBall } from "../_components/BouncingBall";
import { IConfig } from "../models";
import { getSettingsById } from "@/services/mind-swing";

export const ClientView: React.FC = () => {
  const searchParams = useSearchParams();
  const [clientStarted, setClientStarted] = useState(false);
  const [config, setConfig] = useState<IConfig>();

  const savedId = searchParams.get("id");

  useEffect(() => {
    if (savedId) {
      void getSettingsById(savedId).then((settings) => {
        if (settings) {
          setConfig(settings);
        } else {
          console.warn(`Can't find saved settings by id ${savedId}`);
        }
      });
    } else {
      alert("No savedId!");
    }
  }, [savedId]);

  const renderContent = () => {
    if (!config) {
      return "Loading...";
    }
    if (!clientStarted) {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-950 z-10">
          <button
            onClick={() => {
              initAudio();
              setClientStarted(true);
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg shadow-indigo-500/20 transition-transform hover:scale-105"
          >
            <Play className="w-10 h-10 ml-1" />
          </button>
        </div>
      );
    }

    return <BouncingBall {...config} isRunning={true} />;
  };

  return (
    <div className="w-screen h-screen bg-gray-950 overflow-hidden relative">
      {renderContent()}
    </div>
  );
};
