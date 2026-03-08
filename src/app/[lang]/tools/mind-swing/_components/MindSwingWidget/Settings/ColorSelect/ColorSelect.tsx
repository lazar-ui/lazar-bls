import React from "react";
import { IColor } from "./models";

export interface IProps {
  onChange: (value: string) => void;
  preset?: Readonly<IColor[]>;
  value: string;
}

export const ColorSelect: React.FC<IProps> = (props) => {
  const { onChange, preset = [], value } = props;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        {preset.map((color) => (
          <button
            key={color.value}
            onClick={() => onChange(color.value)}
            className={`w-8 h-8 rounded border-2 transition-all ${value.toLowerCase() === color.value ? "border-white scale-110 shadow-lg" : "border-transparent hover:scale-105"}`}
            style={{ backgroundColor: color.value }}
            title={color.name}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="color"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-10 h-10 rounded cursor-pointer bg-transparent border-0 p-0"
        />
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-indigo-500 font-mono"
          placeholder="#000000"
        />
      </div>
    </div>
  );
};
