import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

import { DATE_TIME_FORMATS } from "./consts";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment.
  let locale = await requestLocale;

  locale = locale as "en";

  // Ensure that a valid locale is used
  // TODO: Add typeguard `isLocale(locale: string): locale is 'en' | 'ru'`.
  if (!locale || !routing.locales.includes(locale as "en")) {
    locale = routing.defaultLocale;
  }

  return {
    formats: {
      dateTime: DATE_TIME_FORMATS,
    },

    locale,

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    messages: (await import(`./translations/${locale}.json`)).default,

    onError(error) {
      console.warn(`I18n Error. Code: ${error.code}.`, error);
    },
  };
});
