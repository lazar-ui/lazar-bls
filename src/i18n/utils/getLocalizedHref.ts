import { AVAILABLE_LOCALES } from '../consts';
import { TAvailableLocale } from '../models';

/**
 * Util function for constructing localized URL.
 */
export const getLocalizedHref = (url: string, locale: TAvailableLocale): string => {
  // If is external link, we should return url as is.
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // If URL is already localized to requested locale, we should return url as is.
  if (url.startsWith(`/${locale}/`)) {
    return url;
  }

  // If URL contains another locale from `AVAILABLE_LOCALES`, we should return url as is.
  if (AVAILABLE_LOCALES.some((availableLocale) => url.startsWith(`/${availableLocale}/`))) {
    return url;
  }

  return `/${locale}/${url}`;
};
