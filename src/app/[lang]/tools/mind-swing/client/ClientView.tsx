"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { initAudio } from "../utils/audio";
import { Play } from "lucide-react";
import { BouncingBall } from "../_components/BouncingBall";
import { IConfig } from "../models";

export const ClientView: React.FC = () => {
  const searchParams = useSearchParams();
  const [clientStarted, setClientStarted] = useState(false);

  const config = {
    speed: Number(searchParams.get("s")) || 10,
    size: Number(searchParams.get("sz")) || 80,
    color: searchParams.get("c") ? `#${searchParams.get("c")}` : "#3b82f6",
    trajectory: searchParams.get("t") || "h",
    soundType: searchParams.get("snd") || "pop",
  } as IConfig;

  return (
    <div className="w-screen h-screen bg-gray-950 overflow-hidden relative">
      {!clientStarted ? (
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
      ) : (
        <BouncingBall {...config} isRunning={true} />
      )}
    </div>
  );
};
