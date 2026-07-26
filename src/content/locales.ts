import { en } from "./en";

export const defaultLocale = "en";
export const supportedLocales = ["en", "ru"] as const;
export type SupportedLocale = (typeof supportedLocales)[number];

// Russian copy can be added here without changing page or component structure.
export const dictionaries = { en } satisfies Partial<
  Record<SupportedLocale, typeof en>
>;
