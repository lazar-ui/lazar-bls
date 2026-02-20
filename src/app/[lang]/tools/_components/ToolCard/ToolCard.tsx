import React from "react";

import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import clsx from "clsx";

export interface IProps extends React.PropsWithChildren {
  disabled?: boolean;
  link?: string;
  icon: LucideIcon;
  text: string;
  title: string;
}

export const ToolCard: React.FC<IProps> = (props) => {
  const { disabled = false, link, icon: Icon, text, title } = props;

  const renderLink = () => {
    if (!link) {
      return (
        <span className="text-gray-400 font-medium text-sm cursor-not-allowed">
          Coming Soon...
        </span>
      );
    }

    return (
      <Link
        href="/tools/mind-swing"
        className="text-indigo-600 font-medium text-sm flex items-center gap-1 hover:text-indigo-700"
      >
        Launch Tool <ArrowRight className="w-4 h-4" />
      </Link>
    );
  };

  const rootClassName = clsx(
    "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-shadow flex flex-col",
    {
      disabled: disabled,
    },
  );

  return (
    <div className={rootClassName}>
      <div className="p-6 flex-1">
        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{text}</p>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        {renderLink()}
      </div>
    </div>
  );
};
