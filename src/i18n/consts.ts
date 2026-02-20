import { Formats } from "next-intl";

import { EDateTimeFormat } from "./enums";

/**
 * A list of all locales (language codes) that are supported.
 */
export const AVAILABLE_LOCALES = ["en", "ru"] as const;

/**
 * Locale by default.
 */
export const DEFAULT_LOCALE = "ru";

/**
 * Date formats for displaying date and time.
 */
export const DATE_TIME_FORMATS: Formats["dateTime"] = {
  // Date.
  [EDateTimeFormat.DATE_NUMERIC]: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Asia/Baku",
  },
  [EDateTimeFormat.DATE_FULL]: {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Baku",
  },
  [EDateTimeFormat.DATE_FULL_WITH_TIME]: {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Baku",
  },
  [EDateTimeFormat.DATE_NUMERIC_WITH_TIME]: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Baku",
  },

  // Time.
  [EDateTimeFormat.TIME_SHORT]: {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Baku",
  },
  [EDateTimeFormat.TIME_LONG]: {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Baku",
  },
} as const;
