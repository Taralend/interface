// src/index.js
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import React, { PropsWithChildren, useEffect } from 'react';

import { messages } from '../locales/en/messages.js';

i18n.load('en', messages);
i18n.activate('en');

export const DEFAULT_LOCALE = 'en';

// export const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'el'];
// export const LANG_MAP = {
//   en: 'English',
//   es: 'Spanish',
//   fr: 'French',
//   el: 'Greek',
// };

export const SUPPORTED_LANGUAGES = ['en'];
export const LANG_MAP = {
  en: 'English',
};

/**
 * We do a dynamic import of just the catalog that we need
 * @param locale any locale string
 */
export async function dynamicActivateLanguage(locale: string) {
  const { messages } = await import(`../locales/${locale}/messages.js`);
  i18n.load(locale, messages);
  i18n.activate(locale);
  localStorage.setItem('LOCALE', locale);
}

export const LanguageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    // With this method we dynamically load the catalogs
    const savedLocale = localStorage.getItem('LOCALE') || DEFAULT_LOCALE;
    if (i18n.locale !== savedLocale) dynamicActivateLanguage(savedLocale);
  }, []);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
};
