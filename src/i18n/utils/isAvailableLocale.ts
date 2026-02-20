import { AVAILABLE_LOCALES } from '../consts';
import { TAvailableLocale } from '../models';

/**
 * Typeguard to check if locale is available.
 * @param locale
 */
export const isAvailableLocale = (locale: string): locale is TAvailableLocale => {
  return AVAILABLE_LOCALES.includes(locale as TAvailableLocale);
};
