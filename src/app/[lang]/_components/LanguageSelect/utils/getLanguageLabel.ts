import { ELanguage } from '../enums';

/**
 * Utitlity function to get language label.
 * @param language Elanguage.
 * @returns
 */
export const getLanguageLabel = (language: ELanguage) => {
  switch (language) {
    case ELanguage.EN:
      return 'English';
    case ELanguage.RU:
      return 'Русский';
    default:
      return 'Azərbaycan';
  }
};
