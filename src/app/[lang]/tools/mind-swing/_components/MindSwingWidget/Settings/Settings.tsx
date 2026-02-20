import React from "react";

import { IConfig } from "../../../models";

export interface IProps {
  config: IConfig;
  onChange: (config: IConfig) => void;
}

export const Settings: React.FC<IProps> = (props) => {
  const { config, onChange } = props;

  const updateConfig = <T extends IConfig>(
    key: keyof T,
    value: T[typeof key],
  ) => {
    onChange({ ...config, [key]: value });
  };

  return (
    <div>
      <div className="space-y-5">
        {/* Speed */}
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-sm text-gray-400">Speed</label>
            <span className="text-sm text-gray-300 font-mono">
              {config.speed}
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={config.speed}
            onChange={(e) => updateConfig("speed", Number(e.target.value))}
            className="w-full accent-indigo-500"
          />
        </div>

        {/* Size */}
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-sm text-gray-400">Size</label>
            <span className="text-sm text-gray-300 font-mono">
              {config.size}px
            </span>
          </div>
          <input
            type="range"
            min="20"
            max="300"
            value={config.size}
            onChange={(e) => updateConfig("size", Number(e.target.value))}
            className="w-full accent-indigo-500"
          />
        </div>

        {/* Color */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">Color</label>
          <div className="flex gap-2">
            <input
              type="color"
              value={config.color}
              onChange={(e) => updateConfig("color", e.target.value)}
              className="w-10 h-10 rounded cursor-pointer bg-transparent border-0 p-0"
            />
            <input
              type="text"
              value={config.color}
              onChange={(e) => updateConfig("color", e.target.value)}
              className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Trajectory */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">Trajectory</label>
          <select
            value={config.trajectory}
            onChange={(e) => updateConfig("trajectory", e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-indigo-500"
          >
            <option value="h">Horizontal</option>
            <option value="v">Vertical</option>
            <option value="d">Diagonal</option>
          </select>
        </div>

        {/* Sound */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">Edge Sound</label>
          <select
            value={config.soundType}
            onChange={(e) => updateConfig("soundType", e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-indigo-500"
          >
            <option value="pop">Pop</option>
            <option value="click">Click</option>
            <option value="beep">Beep</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
    </div>
  );
};
