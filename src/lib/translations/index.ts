import { enTranslations } from './en';
import { ukTranslations } from './uk';
import { ruTranslations } from './ru';

export const translations = {
  en: enTranslations,
  uk: ukTranslations,
  ru: ruTranslations
};

export type TranslationType = typeof enTranslations;