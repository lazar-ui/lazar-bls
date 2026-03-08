import React from "react";

import clsx from "clsx";
import { Fullscreen, Play, Pause, RotateCcw, Share } from "lucide-react";

import { formatTime } from "./utils";

import styles from "./styles.module.scss";

export interface IProps {
  hitCount?: number;
  onFullscreenToggle?: () => void;
  onReset: () => void;
  onToggle: () => void;
  played: boolean;
  time?: number;
}

export const Toolbar: React.FC<IProps> = (props) => {
  const {
    played: isRunning,
    onFullscreenToggle,
    onToggle,
    onReset,
    time = 0,
    hitCount = 0,
  } = props;

  const handlePlayClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    onToggle();
  };

  const handleResetClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onReset();
  };

  const handleFullscreenClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();

    if (onFullscreenToggle) {
      onFullscreenToggle();
    }
  };

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl px-6 py-4 flex items-center gap-8 shadow-2xl z-50">
      <div className="flex items-center gap-4">
        <button
          onClick={handlePlayClick}
          className="w-12 h-12 flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white rounded-full transition-colors shadow-lg"
        >
          {isRunning ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-1" />
          )}
        </button>
        <button
          onClick={handleResetClick}
          className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full transition-colors"
          title="Reset Session"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <button
          onClick={handleFullscreenClick}
          className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full transition-colors"
          title="Toggle fullscreen mode"
        >
          <Fullscreen className="w-4 h-4" />
        </button>
      </div>

      <div className="w-px h-8 bg-gray-700"></div>

      <div className="flex items-center gap-8">
        <div className="flex flex-col">
          <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">
            Time
          </span>
          <span className="text-xl font-mono text-white leading-none">
            {formatTime(time)}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">
            Hits
          </span>
          <span className="text-xl font-mono text-white leading-none">
            {hitCount}
          </span>
        </div>
      </div>
    </div>
  );
};
