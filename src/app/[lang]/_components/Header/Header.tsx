"use client";
import React from "react";

import Link from "next/link";
import { Brain } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "I18n/routing";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const t = useTranslations("Header");
  const isHome = pathname === "/";
  const isTools = pathname.startsWith("/tools");

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl tracking-tight text-gray-900">
                EMDR Flow
              </span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`${isHome ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                {t("Navigation.Home")}
              </Link>
              <Link
                href="/tools"
                className={`${isTools ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                {t("Navigation.Tools")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
