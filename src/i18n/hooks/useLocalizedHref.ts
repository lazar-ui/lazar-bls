import { useParams } from "next/navigation";

import { DEFAULT_LOCALE } from "../consts";

/**
 * A hook that returns a function to get the localized href for a given path.
 *
 * @param locale - The locale to use for the href. If not provided, the current locale will be used.
 */
export const useLocalizedHref = (locale?: string) => {
  const { lang } = useParams();
  let normalizedLocale = DEFAULT_LOCALE;

  if (locale) {
    normalizedLocale = locale;
  } else {
    if (typeof lang === "string") {
      normalizedLocale = lang;
    } else if (Array.isArray(lang) && lang[0]) {
      normalizedLocale = lang[0];
    }
  }

  const getLocalizedHref = (path: string) => {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;

    return `/${normalizedLocale}${normalizedPath}`;
  };

  return getLocalizedHref;
};
