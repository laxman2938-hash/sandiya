import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'np'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    return { 
      locale: 'en',
      messages: {} 
    };
  }
  const messages = (await import(`../messages/${locale}.json`)).default;
  return {
    locale: locale as string,
    messages,
  };
});
