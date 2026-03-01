/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { initAudio } from "../utils/audio";
import { Play } from "lucide-react";
import { BouncingBall } from "../_components/BouncingBall";
import { ISettings, listenForSettings } from "Services/mind-swing";
import { Unsubscribe } from "firebase/database";

export const ClientView: React.FC = () => {
  const searchParams = useSearchParams();
  const [clientStarted, setClientStarted] = useState(false);
  const savedId = searchParams.get("id");

  const [settings, setSettings] = useState<ISettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;

    if (savedId && typeof savedId === "string") {
      setLoading(true);
      setError(null);

      // Устанавливаем слушателя
      unsubscribe = listenForSettings(savedId, (fetchedSettings) => {
        setSettings(fetchedSettings);
        setLoading(false);
        if (!fetchedSettings) {
          setError("Настройки виджета не найдены или удалены.");
        }
      });
    } else if (!savedId) {
      setLoading(false);
      setError("Некорректный ID виджета в URL.");
    }

    // Функция очистки useEffect: отписываемся от слушателя, когда компонент размонтируется
    return () => {
      if (unsubscribe) {
        console.log(`Отписка от обновлений для виджета ${savedId}`);
        unsubscribe();
      }
    };
  }, [savedId]);

  const renderContent = () => {
    if (loading) {
      return "Loading...";
    }
    if (error || !settings) {
      return "Error...";
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

    return <BouncingBall {...settings} isRunning={true} />;
  };

  return (
    <div className="w-screen h-screen bg-gray-950 overflow-hidden relative">
      {renderContent()}
    </div>
  );
};
