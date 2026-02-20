/**
 * Enumeration of supported date and time formats.
 */
export enum EDateTimeFormat {
  /** 31.12.2025. */
  DATE_NUMERIC = 'date.numeric',

  /** 31 December 2025. */
  DATE_FULL = 'date.full',

  /** 31.12.2025, 15:30:00. */
  DATE_NUMERIC_WITH_TIME = 'date.numericWithTime',

  /** 31 December 2025, 15:30:00. */
  DATE_FULL_WITH_TIME = 'date.fullWithTime',

  /** 23:59. */
  TIME_SHORT = 'time.short',

  /** 23:59:59. */
  TIME_LONG = 'time.long',
}
