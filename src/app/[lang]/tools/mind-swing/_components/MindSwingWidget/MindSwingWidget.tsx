"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

import {
  Activity,
  ArrowLeft,
  Check,
  Settings as SettingsIcon,
  Share2,
} from "lucide-react";
import Link from "next/link";

import { usePathname, useRouter } from "I18n/routing";
import {
  createWidgetLinkAndSaveSettings,
  getSettingsById,
  ISettings,
  updateSettings,
} from "Services/mind-swing";

import { initAudio } from "../../utils/audio";
import { BouncingBall } from "../BouncingBall";
import { Settings } from "./Settings";
import { useSearchParams } from "next/navigation";
import { DEFAULT_SETTINGS } from "./consts";
import { Toolbar } from "./Toolbar";
import styles from "./styles.module.scss";

export const MindSwingWidget: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const savedId = searchParams.get("id");
  const [copied, setCopied] = useState(false);
  const [hitCount, setHitCount] = useState(0);
  const [time, setTime] = useState(0);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  const [settings, setSettings] = useState<ISettings>(DEFAULT_SETTINGS);

  const copyIdToClipboard = (id: string, buttonEl: HTMLButtonElement) => {
    const params = new URLSearchParams();
    params.set("id", id);

    const url = `${window.location.origin}${pathname}/client?${params.toString()}`;
    navigator.clipboard.writeText(url);

    setCopied(true);
  };

  const generateShareUrl = async () => {
    const widgetId = await createWidgetLinkAndSaveSettings(settings);

    if (!widgetId) {
      alert(
        "Failed to create widget link. Please try again or contact support.",
      );
      return "";
    }

    const params = new URLSearchParams();
    params.set("id", widgetId.toString());
    router.replace(`${pathname}?${params.toString()}`);

    return widgetId;
  };

  const handleCopyLinkClick = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const { currentTarget } = event;
    let widgetId = savedId;

    currentTarget.disabled = true;

    if (widgetId) {
      await updateSettings(widgetId, settings);
    } else {
      widgetId = await generateShareUrl();
    }

    await updateSettings(widgetId, settings);

    copyIdToClipboard(widgetId, currentTarget);

    setTimeout(() => {
      currentTarget.disabled = false;
      setCopied(false);
    }, 2000);
  };

  const handleSettingsChange = (nextSettings: ISettings) => {
    setSettings(nextSettings);
    initAudio(); // Initialize audio on any interaction
  };

  const handleToggle = () => {
    setSettings({ ...settings, isRunning: !settings.isRunning });
  };

  const handleReset = useCallback(() => {
    setSettings({ ...settings, isRunning: false });
    setHitCount(0);
  }, [settings]);

  const handleHit = useCallback(() => {
    setHitCount((value) => value + 1);
  }, []);

  const handleFullscreenToggle = useCallback(() => {
    if (!document.fullscreenElement && previewContainerRef.current) {
      previewContainerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    if (savedId) {
      void getSettingsById(savedId).then((data) => {
        if (data) {
          setSettings(data);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (savedId) {
      void updateSettings(savedId, settings);
    }
  }, [savedId, settings]);

  useEffect(() => {
    let interval: number;
    if (settings.isRunning) {
      interval = window.setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [settings.isRunning]);

  return (
    <div className={styles.root}>
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
        <Settings config={settings} onChange={handleSettingsChange} />
        <div className="mt-auto pt-6 border-t border-gray-800">
          <button
            onClick={handleCopyLinkClick}
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
      <div
        className="flex-1 relative cursor-pointer"
        onClick={initAudio}
        ref={previewContainerRef}
      >
        <BouncingBall onHit={handleHit} settings={settings} />
        <div className="absolute top-6 left-6 bg-gray-900/80 backdrop-blur text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-800 flex items-center gap-2 shadow-lg">
          <SettingsIcon className="w-4 h-4 text-gray-400" />
          Preview Mode
        </div>
        <div className={styles.toolbar}>
          <Toolbar
            hitCount={hitCount}
            onFullscreenToggle={handleFullscreenToggle}
            onToggle={handleToggle}
            onReset={handleReset}
            played={settings.isRunning}
            time={time}
          />
        </div>
      </div>
    </div>
  );
};
