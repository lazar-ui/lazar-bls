import React from "react";

import { ISettings } from "Services/mind-swing";
import { DEFAULT_BACKGROUND_PALLETE, DEFAULT_PALLETE } from "./consts";
import { ColorSelect } from "./ColorSelect";

export interface IProps {
  config: ISettings;
  onChange: (config: ISettings) => void;
}

export const Settings: React.FC<IProps> = (props) => {
  const { config, onChange } = props;

  const updateConfig = <T extends ISettings>(
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
            max="10"
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

        {/* Background Color */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Background Color
          </label>
          <ColorSelect
            onChange={(color) => updateConfig("background", color)}
            preset={DEFAULT_BACKGROUND_PALLETE}
            value={config.background}
          />
        </div>

        {/* Ball Color */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Ball Color</label>
          <ColorSelect
            onChange={(color) => updateConfig("color", color)}
            preset={DEFAULT_PALLETE}
            value={config.color}
          />
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
            <option value="metronome">Metronome</option>
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
