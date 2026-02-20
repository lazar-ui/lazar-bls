import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from './consts';

export const routing = defineRouting({
  locales: AVAILABLE_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localeDetection: true,
  localePrefix: 'always',
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
